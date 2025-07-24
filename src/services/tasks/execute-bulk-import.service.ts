import { apiClient } from '@/api';
import type { InvenioTask } from '@/types';

/**
 * Executes a bulk import for a given task ID.
 * @param taskId - The ID of the importer task to execute.
 * @returns A promise that resolves to the response data from the API.
 */
export const executeBulkImport = async (taskId: string) => {
  try {
    const response = await apiClient.post<InvenioTask>(
      `/api/importer-tasks/${taskId}/load`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error executing bulk import:', error);
    throw new Error('Failed to execute bulk import');
  }
};
