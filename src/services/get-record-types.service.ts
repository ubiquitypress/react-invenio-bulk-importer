import { apiClient } from '@/api';

/**
 * Fetches the available record types from the importer configuration API.
 *
 * Makes a GET request to the `/api/importer-tasks/config` endpoint to retrieve
 * the list of supported record types for the bulk importer.
 *
 * @returns A promise that resolves to an array of record type strings.
 *          Returns an empty array if the request fails or encounters an error.
 *
 * @throws Will log errors to console but does not throw exceptions.
 *         All errors are handled internally and return an empty array.
 */
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
