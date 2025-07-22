import { apiClient } from '@/api';

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
