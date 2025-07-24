import { apiClient } from '@/api';
import type { InvenioImporterRecords } from '@/types';

/**
 * Fetches import records from the Invenio API.
 * @returns A promise that resolves to the import records data.
 */
export const getImportRecords = async () => {
  try {
    const response = await apiClient.get<InvenioImporterRecords>(
      '/api/importer-records'
    );
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
