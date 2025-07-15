import { apiClient } from '@/api';

export interface ImporterTaskConfig {
  serializers: string[];
  options: {
    doi_minting: boolean;
    publish: boolean;
  };
}

export const getSerializers = async (
  recordType: string
): Promise<ImporterTaskConfig> => {
  try {
    const response = await apiClient.get<ImporterTaskConfig>(
      `/api/importer-tasks/config/${recordType}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching serializers:', error);
    throw new Error('Failed to fetch serializers');
  }
};
