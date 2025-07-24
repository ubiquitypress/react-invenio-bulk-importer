import { formatFileSize, getTotalSizeFormatted } from '@/utils';
import React, { Fragment } from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import type { UploadableFile } from '../file-uploader.types';

interface FileUploaderAreaProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  accept: string;
  maxFiles: number;
  maxTotalSize: number;
  isDragOver: boolean;
  disabled?: boolean;
  uploadFiles: UploadableFile[];
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDragOver: (event: React.DragEvent) => void;
  onDragLeave: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent) => void;
  onFileDialogOpen: () => void;
}

export const FileUploaderArea: React.FC<FileUploaderAreaProps> = ({
  fileInputRef,
  accept,
  maxFiles,
  maxTotalSize,
  disabled = false,
  isDragOver,
  uploadFiles,
  onInputChange,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileDialogOpen
}) => {
  return (
    <Fragment>
      <input
        ref={fileInputRef}
        type='file'
        multiple
        accept={accept}
        onChange={onInputChange}
        style={{ display: 'none' }}
        disabled={disabled}
      />

      <Segment
        placeholder
        className={`file-drop-zone ${isDragOver ? 'drag-over' : ''}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        style={{
          minHeight: '120px',
          border: isDragOver ? '2px dashed #2185d0' : '2px dashed #d4d4d5',
          backgroundColor: isDragOver ? '#f8f9fa' : 'transparent',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1
        }}
        onClick={onFileDialogOpen}
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
              Max files: {maxFiles} | Max total: {formatFileSize(maxTotalSize)}
            </p>
            {uploadFiles.length > 0 && (
              <p
                style={{ fontSize: '12px', color: '#2185d0', marginTop: '8px' }}
              >
                <strong>
                  {uploadFiles.length} files selected •{' '}
                  {getTotalSizeFormatted(uploadFiles)} total
                </strong>
              </p>
            )}
          </div>
        </div>
      </Segment>
    </Fragment>
  );
};
