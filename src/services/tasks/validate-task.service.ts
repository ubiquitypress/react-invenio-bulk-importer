import { apiClient } from '@/api';

export const validateTask = async (taskId: string) => {
  try {
    const res = await apiClient.post(
      `/api/importer-tasks/${taskId}/validate`,
      {}
    );

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Failed to validate task: ${res.statusText}`);
    }
  } catch (error) {
    throw new Error(
      `Error validating task: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
