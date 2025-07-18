import { apiClient } from '@/api';

export const getTaskStatus = async (taskId: string) => {
  try {
    const response = await apiClient.put(
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
