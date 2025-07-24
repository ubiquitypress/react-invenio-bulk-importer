import { apiClient } from '@/api';
import type { InvenioImporterRecords } from '@/types';

/**
 * Runs an importer record by its ID.
 * @param recordId - The ID of the importer record to run.
 * @returns A promise that resolves to the import record data.
 */
export const runImporterRecord = async (recordId: string) => {
  try {
    const response = await apiClient.post<InvenioImporterRecords>(
      `/api/importer-records/${recordId}/run`,
      {}
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
