import { apiClient } from '@/api';

export const initializeTaskFiles = async (
  taskId: string,
  fileNames: string[]
): Promise<void> => {
  const payload: Record<'key', string>[] = fileNames.map(name => ({
    key: name
  }));
  try {
    const response = await apiClient.post(
      `/api/importer-tasks/${taskId}/files`,
      payload
    );

    if (response.status !== 201) {
      throw new Error(`Failed to initialize files: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error initializing files:', error);
    throw new Error(
      `Failed to initialize files: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
