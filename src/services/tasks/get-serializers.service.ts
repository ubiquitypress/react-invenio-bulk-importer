import { apiClient } from '@/api';
import type { ImporterTaskConfig } from '@/types';

/**
 * Fetches serializer configuration for a specific record type from the API.
 *
 * @param recordType - The type of record to fetch serializers for
 * @returns A promise that resolves to the importer task configuration containing serializers
 * @throws When the API request fails or returns an unexpected status code
 */
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
