import { formatFileSize, getTotalSizeFormatted } from '@/utils';
import { cn } from '@/utils/cn';
import React, { Fragment } from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import type { UploadableFile } from '../file-uploader.types';
import { styles } from './file-uploader-area.styles';

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
        className={styles.hiddenInput}
        disabled={disabled}
      />

      <Segment
        placeholder
        className={cn(
          'file-drop-zone',
          styles.dropZone,
          {
            [styles.dropZoneActive]: isDragOver,
            [styles.dropZoneDisabled]: disabled
          }
        )}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={onFileDialogOpen}
      >
        <div className={styles.contentContainer}>
          <Icon
            name='cloud upload'
            size='huge'
            color={isDragOver ? 'blue' : 'grey'}
          />
          <div className={styles.textContainer}>
            <p>
              <strong>Drop files here or click to select</strong>
            </p>
            <p className={styles.smallText}>
              Max files: {maxFiles} | Max total: {formatFileSize(maxTotalSize)}
            </p>
            {uploadFiles.length > 0 && (
              <p className={styles.selectedFilesText}>
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
