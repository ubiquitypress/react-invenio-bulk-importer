import { apiClient } from '@/api';

/**
 * Initializes task files for Invenio.
 * @param taskId - The ID of the importer task.
 * @param fileNames - An array of file names to initialize.
 * @returns A promise that resolves when the files are successfully initialized.
 */
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
