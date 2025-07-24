import { apiClient } from '@/api';
import type { InvenioTask } from '@/types';

/**
 * Fetches an importer task by its ID.
 * @param taskId - The ID of the importer task to retrieve.
 * @returns A promise that resolves to the importer task data.
 */
export const getImporterTask = async (taskId: string) => {
  try {
    const response = await apiClient.get<InvenioTask>(
      `/api/importer-tasks/${taskId}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to get importer task: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(
      `Error getting importer task: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
