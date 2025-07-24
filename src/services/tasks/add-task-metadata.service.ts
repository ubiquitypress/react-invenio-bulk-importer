import { apiClient } from '@/api';

/**
 * Adds metadata to an importer task.
 * @param taskId - The ID of the importer task.
 * @param metadata - The metadata file to be added.
 * @returns A promise that resolves to the response data.
 */
export const addTaskMetadata = async (taskId: string, metadata: File) => {
  try {
    const response = await apiClient.put(
      `/api/importer-tasks/${taskId}/metadata`,
      metadata,
      {
        headers: {
          'content-type': 'application/octet-stream',
          'X-Filename': `${metadata.name}`
        }
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to create task: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(
      `Error creating task: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
