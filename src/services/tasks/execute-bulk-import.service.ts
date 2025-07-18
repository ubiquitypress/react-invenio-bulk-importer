import { apiClient } from '@/api';

export const executeBulkImport = async (taskId: string) => {
  try {
    const response = await apiClient.post(`/api/importer-tasks/${taskId}/load`);

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
