import { apiClient } from '@/api';

/**
 * Commits a file to an importer task.
 * @param taskId - The ID of the importer task.
 * @param fileName - The name of the file to commit.
 * @returns A promise that resolves when the file is successfully committed.
 */
export const commitTaskFile = async (
  taskId: string,
  fileName: string
): Promise<void> => {
  try {
    const response = await apiClient.post(
      `/api/importer-tasks/${taskId}/files/${fileName}/commit`,
      {}
    );

    if (response.status !== 200) {
      throw new Error(`Failed to commit file: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error committing file:', error);
    throw new Error(
      `Failed to commit file: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
