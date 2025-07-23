import React, { useCallback, useRef } from 'react';
import { Icon, Message } from 'semantic-ui-react';
import type { FileUploaderProps } from './file-uploader.types';
import { FileUploaderArea } from './file-uploader-area';
import { useFileUploader } from './hooks/use-file-uploader.hook';
import { UploadedFilesList } from './uploaded-files-list';

export const FileUploader: React.FC<FileUploaderProps> = ({
  onChange,
  accept = '.csv,.json,.xlsx,.txt',
  maxSize = 10 * 1024 * 1024, // 10MB
  maxFiles = 5,
  disabled = false,
  error
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = React.useState(false);

  const { uploadFiles, isUploading, addFiles, removeFile, clearFiles } =
    useFileUploader({
      onUploadComplete: files => {
        onChange(files);
      },
      onUploadError: errorMessage => {
        console.error('Upload error:', errorMessage);
      }
    });

  /**
   * Handles file selection from input or drag-and-drop.
   * Validates files against accept, maxSize, and maxFiles constraints.
   * If valid files are selected, updates the parent component with the new file list.
   */
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

  /**
   * Handles file input change event.
   * Calls handleFileSelect with the selected files and clears the input value.
   */
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleFileSelect(event.target.files);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [handleFileSelect]
  );

  /**
   * Handles drag over event to indicate a valid drop zone.
   * Prevents default behavior and sets isDragOver state if not disabled.
   */
  const handleDragOver = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      if (!disabled) {
        setIsDragOver(true);
      }
    },
    [disabled]
  );

  /**
   * Handles drag leave event to reset the drop zone state.
   * Prevents default behavior and resets isDragOver state.
   */
  const handleDragLeave = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  }, []);

  /**
   * Handles drop event to process files dropped into the drop zone.
   * Prevents default behavior, resets isDragOver state, and calls handleFileSelect.
   */
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

  /**
   * Opens the file input dialog when the drop zone is clicked.
   * Only opens if not disabled.
   */
  const openFileDialog = useCallback(() => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  }, [disabled]);

  /**
   * Handles file removal from the list.
   * Updates the parent component with the remaining files after removal.
   */
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

  /**
   * Clears all selected files and notifies the parent component.
   * Resets the file input value to allow re-selection.
   */
  const handleClearFiles = useCallback(() => {
    clearFiles();
    onChange([]);
  }, [clearFiles, onChange]);

  return (
    <div>
      <FileUploaderArea
        fileInputRef={fileInputRef}
        accept={accept}
        maxSize={maxSize}
        maxFiles={maxFiles}
        isDragOver={isDragOver}
        disabled={disabled}
        uploadFiles={uploadFiles}
        onInputChange={handleInputChange}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onFileDialogOpen={openFileDialog}
      />

      {error && (
        <Message negative size='small'>
          <Icon name='exclamation triangle' />
          {error}
        </Message>
      )}

      {uploadFiles.length > 0 && (
        <UploadedFilesList
          uploadFiles={uploadFiles}
          isUploading={isUploading}
          handleRemoveFile={handleRemoveFile}
          handleClearFiles={handleClearFiles}
        />
      )}
    </div>
  );
};
