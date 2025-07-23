import { FileUploader } from '@/components/core/file-uploader';
import { executeTaskWorkflow, updateTaskContent } from '@/services';
import React, { useState } from 'react';
import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react';
import { useTaskDetails } from '../provider';

export const UploadMetadataModal = () => {
  const { taskId } = useTaskDetails();
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setUploadFile(file);
    } else {
      setUploadFile(null);
    }
  };

  const handleFilesChange = (files: File[]) => {
    setUploadFiles(files);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setUploadFile(null);
    setUploadFiles([]);
  };

  const handleUpload = async () => {
    if (!uploadFile && uploadFiles.length === 0) {
      return;
    }

    try {
      // Update task with new metadata and/or files
      await updateTaskContent(
        taskId,
        uploadFile,
        uploadFiles.length > 0 ? uploadFiles : undefined,
        {
          onProgress: (step, progress, details) => {
            console.log(`${step}: ${progress}% ${details || ''}`);
          },
          onError: (error, step) => {
            console.error(`Error during ${step}:`, error);
          }
        }
      );

      // Execute the validation and import workflow only if metadata was uploaded
      if (uploadFile) {
        await executeTaskWorkflow(taskId, {
          autoExecute: true, // Auto-execute import after validation
          onProgress: (step, progress, details) => {
            console.log(`${step}: ${progress}% ${details || ''}`);
          },
          onError: (error, step) => {
            console.error(`Error during ${step}:`, error);
          }
        });
      }

      setOpenModal(false);
      setUploadFile(null);
      setUploadFiles([]);
    } catch (error) {
      console.error('Error uploading content:', error);
    }
  };

  return (
    <Modal
      open={openModal}
      onOpen={() => setOpenModal(true)}
      onClose={handleCloseModal}
      size='small'
      closeIcon
      trigger={<Button icon='upload' size='small' content='Upload Content' />}
    >
      <Header icon>
        <Icon name='upload' />
        Upload Metadata & Files
      </Header>

      <Modal.Content>
        <Form onSubmit={handleUpload}>
          <Form.Field>
            <label htmlFor='fileInput'>Select Metadata File (Optional)</label>
            <input
              id={'fileInput'}
              type='file'
              onChange={handleFileChange}
              accept='.csv'
            />
            {uploadFile && (
              <div style={{ marginTop: '0.5rem', color: '#666' }}>
                Selected: {uploadFile.name}
              </div>
            )}
          </Form.Field>

          <Form.Field>
            <div
              style={{
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              Additional Files (Optional)
            </div>
            <FileUploader
              value={uploadFiles}
              onChange={handleFilesChange}
              accept='*'
              maxSize={10 * 1024 * 1024 * 1024}
              maxFiles={100}
            />
          </Form.Field>
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={handleCloseModal} color='grey'>
          <Icon name='cancel' />
          Cancel
        </Button>
        <Button
          onClick={handleUpload}
          color='blue'
          disabled={!uploadFile && uploadFiles.length === 0}
        >
          <Icon name='upload' />
          Upload
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
