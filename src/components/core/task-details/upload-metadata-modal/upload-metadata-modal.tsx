import {
  addTaskMetadata,
  executeBulkImport,
  getTaskStatus,
  validateImporterTask
} from '@/services';
import React, { useState } from 'react';
import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react';
import { useTaskDetails } from '../provider';

export const UploadMetadataModal = () => {
  const { taskId } = useTaskDetails();
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setUploadFile(file);
    } else {
      setUploadFile(null);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setUploadFile(null);
  };

  const handleUpload = async () => {
    if (!uploadFile) {
      return;
    }

    try {
      await addTaskMetadata(taskId, uploadFile);
      const validate = await validateImporterTask(taskId);
      console.log('validate', validate);

      if (validate) {
        const runTask = await executeBulkImport(taskId);
        if (runTask) {
          console.log('Task started successfully:', runTask);
        }
        const status = await getTaskStatus(taskId);
        console.log('Task status:', status);
      }
      setOpenModal(false);
      setUploadFile(null);
    } catch (error) {
      console.error('Error uploading metadata:', error);
    }
  };

  return (
    <Modal
      open={openModal}
      onOpen={() => setOpenModal(true)}
      onClose={handleCloseModal}
      size='small'
      closeIcon
      trigger={
        <Button icon='upload' size='small' content='Upload New Metadata' />
      }
    >
      <Header icon>
        <Icon name='upload' />
        Upload Metadata
      </Header>

      <Modal.Content>
        <Form onSubmit={handleUpload}>
          <Form.Field>
            <label htmlFor='fileInput'>Select Metadata File</label>
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
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={handleCloseModal} color='grey'>
          <Icon name='cancel' />
          Cancel
        </Button>
        <Button onClick={handleUpload} color='blue' disabled={!uploadFile}>
          <Icon name='upload' />
          Upload
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
