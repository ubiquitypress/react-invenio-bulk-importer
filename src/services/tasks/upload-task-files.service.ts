import { apiClient } from '@/api';

/**
 * Uploads a file content to an importer task.
 * @param taskId - The ID of the importer task.
 * @param fileName - The name of the file to upload.
 * @param fileContent - The content of the file to upload.
 * @returns A promise that resolves when the file is successfully uploaded.
 */
export const uploadTaskFile = async (
  taskId: string,
  fileName: string,
  fileContent: File
): Promise<void> => {
  try {
    const response = await apiClient.put(
      `/api/importer-tasks/${taskId}/files/${fileName}/content`,
      fileContent,
      {
        headers: {
          'Content-Type': 'application/octet-stream'
        }
      }
    );

    if (response.status !== 200) {
      throw new Error(`Failed to upload file content: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error uploading file content:', error);
    throw new Error(
      `Failed to upload file content: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
