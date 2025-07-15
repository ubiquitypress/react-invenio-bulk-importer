import { apiClient } from '@/api';

export const getRecordTypes = async (): Promise<string[]> => {
  try {
    const response = await apiClient.get<string[]>(
      '/api/importer-tasks/config'
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Failed to fetch record types:', response.statusText);
      return [];
    }
  } catch (error) {
    console.error('Error fetching record types:', error);
    return [];
  }
};
