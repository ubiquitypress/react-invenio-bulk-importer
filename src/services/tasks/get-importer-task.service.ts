import { apiClient } from '@/api';
import type { InvenioTask } from '@/types';

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
