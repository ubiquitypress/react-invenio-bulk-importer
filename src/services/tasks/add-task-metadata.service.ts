import { apiClient } from '@/api';

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
