import {
  commitTaskFile,
  initializeTaskFiles,
  uploadTaskFile
} from '@/services/tasks';
import { useCallback, useState } from 'react';
import type {
  FileUploadProgress,
  FileUploadStatus,
  UploadableFile
} from './file-uploader.types';

interface UseFileUploaderProps {
  taskId?: string;
  onUploadComplete?: (files: File[]) => void;
  onUploadError?: (error: string) => void;
}

export const useFileUploader = ({
  taskId,
  onUploadComplete,
  onUploadError
}: UseFileUploaderProps = {}) => {
  const [uploadFiles, setUploadFiles] = useState<UploadableFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const updateFileStatus = useCallback(
    (
      fileId: string,
      status: FileUploadStatus,
      error?: string,
      progress?: FileUploadProgress
    ) => {
      setUploadFiles(prev =>
        prev.map(f => (f.id === fileId ? { ...f, status, error, progress } : f))
      );
    },
    []
  );

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
          id: `${file.name}-${file.size}-${Date.now()}`,
          status: 'idle'
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

  const removeFile = useCallback((fileId: string) => {
    setUploadFiles(prev => prev.filter(f => f.id !== fileId));
  }, []);

  const clearFiles = useCallback(() => {
    setUploadFiles([]);
  }, []);

  const uploadToServer = useCallback(
    async (files: UploadableFile[]) => {
      if (!taskId) {
        throw new Error('Task ID is required for file upload');
      }

      setIsUploading(true);

      try {
        const fileNames = files.map(f => f.file.name);

        files.forEach(f => updateFileStatus(f.id, 'initializing'));
        await initializeTaskFiles(taskId, fileNames);

        for (const uploadFile of files) {
          try {
            updateFileStatus(uploadFile.id, 'uploading', undefined, {
              loaded: 0,
              total: uploadFile.file.size,
              percentage: 0
            });

            await uploadTaskFile(taskId, uploadFile.file.name, uploadFile.file);

            updateFileStatus(uploadFile.id, 'committing', undefined, {
              loaded: uploadFile.file.size,
              total: uploadFile.file.size,
              percentage: 100
            });

            await commitTaskFile(taskId, uploadFile.file.name);

            updateFileStatus(uploadFile.id, 'completed');
          } catch (error) {
            const errorMessage =
              error instanceof Error ? error.message : 'Upload failed';
            updateFileStatus(uploadFile.id, 'error', errorMessage);
            throw error;
          }
        }

        const completedFiles = files.map(f => f.file);
        onUploadComplete?.(completedFiles);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Upload failed';
        onUploadError?.(errorMessage);
        throw error;
      } finally {
        setIsUploading(false);
      }
    },
    [taskId, updateFileStatus, onUploadComplete, onUploadError]
  );

  const getUploadableFiles = useCallback(() => {
    return uploadFiles.filter(f => f.status === 'idle');
  }, [uploadFiles]);

  const hasErrors = uploadFiles.some(f => f.status === 'error');
  const hasCompleted = uploadFiles.some(f => f.status === 'completed');
  const allCompleted =
    uploadFiles.length > 0 && uploadFiles.every(f => f.status === 'completed');

  return {
    uploadFiles,
    isUploading,
    hasErrors,
    hasCompleted,
    allCompleted,
    addFiles,
    removeFile,
    clearFiles,
    uploadToServer,
    getUploadableFiles
  };
};
