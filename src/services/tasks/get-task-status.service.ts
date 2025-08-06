import { apiClient } from '@/api';
import type { InvenioTask } from '@/types';

/**
 * Gets the status of an importer task by its ID.
 * @param taskId - The ID of the importer task.
 * @returns A promise that resolves to the task status data.
 */
export const getTaskStatus = async (taskId: string) => {
  try {
    const response = await apiClient.put<InvenioTask>(
      `/api/importer-tasks/${taskId}/status`,
      {}
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Failed to get status of importer task: ${response.statusText}`
      );
    }
  } catch (error) {
    throw new Error(
      `Error getting status of importer task: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
