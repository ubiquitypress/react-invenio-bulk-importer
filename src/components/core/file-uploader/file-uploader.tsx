import React, { useCallback, useRef } from 'react';
import {
  Button,
  Icon,
  Label,
  List,
  Message,
  Progress,
  Segment
} from 'semantic-ui-react';
import type { FileUploaderProps } from './file-uploader.types';
import { useFileUploader } from './use-file-uploader.hook';

export const FileUploader: React.FC<FileUploaderProps> = ({
  taskId,
  onChange,
  accept = '.csv,.json,.xlsx,.txt',
  maxSize = 10 * 1024 * 1024, // 10MB
  maxFiles = 5,
  disabled = false,
  error
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = React.useState(false);

  const {
    uploadFiles,
    isUploading,
    hasErrors,
    addFiles,
    removeFile,
    clearFiles,
    uploadToServer,
    getUploadableFiles
  } = useFileUploader({
    taskId,
    onUploadComplete: files => {
      onChange(files);
    },
    onUploadError: errorMessage => {
      console.error('Upload error:', errorMessage);
    }
  });

  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) {
        return;
      }

      const fileArray = Array.from(files);
      const addedFiles = addFiles(fileArray, accept, maxSize, maxFiles);

      // Immediately notify parent of selected files for UI feedback
      if (addedFiles.length > 0) {
        const allFiles = [...uploadFiles, ...addedFiles].map(f => f.file);
        onChange(allFiles);
      }
    },
    [addFiles, accept, maxSize, maxFiles, onChange, uploadFiles]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleFileSelect(event.target.files);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      if (!disabled) {
        setIsDragOver(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      setIsDragOver(false);

      if (disabled) {
        return;
      }

      handleFileSelect(event.dataTransfer.files);
    },
    [disabled, handleFileSelect]
  );

  const handleUpload = useCallback(async () => {
    const filesToUpload = getUploadableFiles();
    if (filesToUpload.length === 0) {
      return;
    }

    try {
      await uploadToServer(filesToUpload);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  }, [getUploadableFiles, uploadToServer]);

  const openFileDialog = useCallback(() => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  }, [disabled]);

  const handleRemoveFile = useCallback(
    (fileId: string) => {
      removeFile(fileId);
      // Update parent with remaining files
      const remainingFiles = uploadFiles
        .filter(f => f.id !== fileId)
        .map(f => f.file);
      onChange(remainingFiles);
    },
    [removeFile, uploadFiles, onChange]
  );

  const handleClearFiles = useCallback(() => {
    clearFiles();
    onChange([]);
  }, [clearFiles, onChange]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'green';
      case 'error':
        return 'red';
      case 'uploading':
      case 'committing':
      case 'initializing':
        return 'blue';
      default:
        return 'grey';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return 'check circle';
      case 'error':
        return 'exclamation triangle';
      case 'uploading':
      case 'committing':
      case 'initializing':
        return 'spinner';
      default:
        return 'file';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
  };

  const getTotalSize = () => {
    return uploadFiles.reduce((total, file) => total + file.file.size, 0);
  };

  const getTotalSizeFormatted = () => {
    return formatFileSize(getTotalSize());
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type='file'
        multiple
        accept={accept}
        onChange={handleInputChange}
        style={{ display: 'none' }}
        disabled={disabled}
      />

      <Segment
        placeholder
        className={`file-drop-zone ${isDragOver ? 'drag-over' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          minHeight: '120px',
          border: isDragOver ? '2px dashed #2185d0' : '2px dashed #d4d4d5',
          backgroundColor: isDragOver ? '#f8f9fa' : 'transparent',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1
        }}
        onClick={openFileDialog}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <Icon
            name='cloud upload'
            size='huge'
            color={isDragOver ? 'blue' : 'grey'}
          />
          <div style={{ marginTop: '10px' }}>
            <p>
              <strong>Drop files here or click to select</strong>
            </p>
            <p style={{ fontSize: '12px', color: '#666' }}>
              Max size: {formatFileSize(maxSize)} | Max files: {maxFiles}
            </p>
            {uploadFiles.length > 0 && (
              <p
                style={{ fontSize: '12px', color: '#2185d0', marginTop: '8px' }}
              >
                <strong>
                  {uploadFiles.length} files selected •{' '}
                  {getTotalSizeFormatted()} total
                </strong>
              </p>
            )}
          </div>
        </div>
      </Segment>

      {error && (
        <Message negative size='small'>
          <Icon name='exclamation triangle' />
          {error}
        </Message>
      )}

      {uploadFiles.length > 0 && (
        <Segment>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }}
          >
            <strong>
              Selected Files ({uploadFiles.length}) • {getTotalSizeFormatted()}
            </strong>
            <Button
              size='mini'
              basic
              icon='trash'
              content='Clear All'
              onClick={handleClearFiles}
              disabled={isUploading}
            />
          </div>

          <List divided>
            {uploadFiles.map(uploadFile => (
              <List.Item key={uploadFile.id}>
                <List.Content>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <Icon
                          name={getStatusIcon(uploadFile.status)}
                          color={getStatusColor(uploadFile.status)}
                          loading={
                            uploadFile.status === 'uploading' ||
                            uploadFile.status === 'committing' ||
                            uploadFile.status === 'initializing'
                          }
                        />
                        <span>{uploadFile.file.name}</span>
                        <Label size='mini' basic>
                          {formatFileSize(uploadFile.file.size)}
                        </Label>
                        <Label
                          size='mini'
                          color={getStatusColor(uploadFile.status)}
                        >
                          {uploadFile.status}
                        </Label>
                      </div>

                      {uploadFile.progress &&
                        uploadFile.status === 'uploading' && (
                          <Progress
                            percent={uploadFile.progress.percentage}
                            size='tiny'
                            color='blue'
                            style={{ marginTop: '5px' }}
                          />
                        )}

                      {uploadFile.error && (
                        <Message
                          negative
                          size='mini'
                          style={{ marginTop: '5px' }}
                        >
                          {uploadFile.error}
                        </Message>
                      )}
                    </div>

                    <Button
                      size='mini'
                      basic
                      icon='close'
                      onClick={() => handleRemoveFile(uploadFile.id)}
                      disabled={isUploading}
                    />
                  </div>
                </List.Content>
              </List.Item>
            ))}
          </List>

          {taskId && getUploadableFiles().length > 0 && (
            <div style={{ marginTop: '15px', textAlign: 'center' }}>
              <Button
                primary
                icon='upload'
                content={`Upload ${getUploadableFiles().length} file(s)`}
                onClick={handleUpload}
                loading={isUploading}
                disabled={isUploading || hasErrors}
              />
            </div>
          )}
        </Segment>
      )}
    </div>
  );
};
