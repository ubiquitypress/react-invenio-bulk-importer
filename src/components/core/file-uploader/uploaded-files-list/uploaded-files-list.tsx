import { formatFileSize, getTotalSizeFormatted } from '@/utils';
import React from 'react';
import { Button, Icon, Label, List, Message, Segment } from 'semantic-ui-react';
import type { UploadableFile } from '../file-uploader.types';

interface UploadedFilesListProps {
  uploadFiles: UploadableFile[];
  isUploading: boolean;
  handleRemoveFile: (fileId: string) => void;
  handleClearFiles: () => void;
}

export const UploadedFilesList: React.FC<UploadedFilesListProps> = ({
  uploadFiles,
  isUploading,
  handleRemoveFile,
  handleClearFiles
}) => {
  return (
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
          Selected Files ({uploadFiles.length}) •{' '}
          {getTotalSizeFormatted(uploadFiles)}
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
                    <Icon name={'file'} />
                    <span>{uploadFile.file.name}</span>
                    <Label size='mini' basic>
                      {formatFileSize(uploadFile.file.size)}
                    </Label>
                  </div>

                  {uploadFile.error && (
                    <Message negative size='mini' style={{ marginTop: '5px' }}>
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
    </Segment>
  );
};
