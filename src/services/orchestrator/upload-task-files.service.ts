import type { FileUploadProgress } from '@/types';
import { commitTaskFile, initializeTaskFiles, uploadTaskFile } from '../tasks';

/**
 * Uploads multiple files to a task with progress tracking
 */
export const uploadTaskFiles = async (
  taskId: string,
  files: File[],
  onProgress?: (progress: FileUploadProgress) => void
): Promise<void> => {
  if (!files || files.length === 0) {
    return;
  }

  // Initialize every file on the server
  const fileNames = files.map(file => file.name);
  await initializeTaskFiles(taskId, fileNames);

  // Upload and commit each file
  for (const file of files) {
    try {
      // Start upload
      onProgress?.({
        fileName: file.name,
        loaded: 0,
        total: file.size,
        percentage: 0
      });
      await uploadTaskFile(taskId, file.name, file);

      // File commit in progress
      onProgress?.({
        fileName: file.name,
        loaded: file.size,
        total: file.size,
        percentage: 90
      });
      await commitTaskFile(taskId, file.name);

      // File upload complete
      onProgress?.({
        fileName: file.name,
        loaded: file.size,
        total: file.size,
        percentage: 100
      });
    } catch (error) {
      throw new Error(
        `Failed to upload file ${file.name}: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }
};
