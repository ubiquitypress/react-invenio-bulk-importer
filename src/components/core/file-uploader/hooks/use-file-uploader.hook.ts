import { useCallback, useState } from 'react';
import type { UploadableFile } from '../file-uploader.types';

interface UseFileUploaderProps {
  taskId?: string;
  onUploadComplete?: (files: File[]) => void;
  onUploadError?: (error: string) => void;
}

export const useFileUploader = ({
  onUploadError
}: UseFileUploaderProps = {}) => {
  const [uploadFiles, setUploadFiles] = useState<UploadableFile[]>([]);
  const [isUploading] = useState(false);

  /**
   * Validates a file against the accepted types and maximum size.
   * Returns an error message if validation fails, otherwise null.
   */
  const validateFile = useCallback(
    (file: File, accept?: string, maxSize?: number): string | null => {
      if (accept) {
        const acceptedTypes = accept.split(',').map(type => type.trim());
        const isValidType = acceptedTypes.some(type => {
          if (type.startsWith('.')) {
            return file.name.toLowerCase().endsWith(type.toLowerCase());
          }
          return file.type.match(new RegExp(type.replace('*', '.*')));
        });
        if (!isValidType) {
          return `File type not accepted. Accepted types: ${accept}`;
        }
      }

      if (maxSize && file.size > maxSize) {
        return `File size exceeds maximum of ${(maxSize / 1024 / 1024).toFixed(2)}MB`;
      }

      return null;
    },
    []
  );

  /**
   * Adds new files to the upload list after validation.
   * Returns an array of successfully added files.
   */
  const addFiles = useCallback(
    (
      newFiles: File[],
      accept?: string,
      maxSize?: number,
      maxFiles?: number
    ) => {
      const validFiles: UploadableFile[] = [];
      const errors: string[] = [];

      for (const file of newFiles) {
        if (maxFiles && uploadFiles.length + validFiles.length >= maxFiles) {
          errors.push(`Maximum ${maxFiles} files allowed`);
          break;
        }

        const validation = validateFile(file, accept, maxSize);
        if (validation) {
          errors.push(`${file.name}: ${validation}`);
          continue;
        }

        const isDuplicate = uploadFiles.some(
          f => f.file.name === file.name && f.file.size === file.size
        );
        if (isDuplicate) {
          errors.push(`${file.name}: File already selected`);
          continue;
        }

        validFiles.push({
          file,
          id: `${file.name}-${file.size}-${Date.now()}`
        });
      }

      if (errors.length > 0) {
        onUploadError?.(errors.join(', '));
      }

      setUploadFiles(prev => [...prev, ...validFiles]);
      return validFiles;
    },
    [uploadFiles, validateFile, onUploadError]
  );

  /**
   * Removes a file from the upload list by its ID.
   */
  const removeFile = useCallback((fileId: string) => {
    setUploadFiles(prev => prev.filter(f => f.id !== fileId));
  }, []);

  /**
   * Clears all files from the upload list.
   * Resets the uploadFiles state to an empty array.
   */
  const clearFiles = useCallback(() => {
    setUploadFiles([]);
  }, []);

  return {
    uploadFiles,
    isUploading,
    addFiles,
    removeFile,
    clearFiles
  };
};
