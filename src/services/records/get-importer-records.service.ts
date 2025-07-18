import { apiClient } from '@/api';

export const getImportRecords = async () => {
  try {
    const response = await apiClient.get('/api/importer-records');
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch import records: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to fetch import records:', error);
    throw error;
  }
};
