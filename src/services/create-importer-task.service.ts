import { apiClient } from '@/api';
import type { InvenioNewImportTask, InvenioTask } from '@/types';

/**
 * Creates a new importer task in the Invenio system.
 *
 * @param task - The new import task configuration containing title, description, mode, status, record type, serializer, and time constraints
 * @returns A promise that resolves to the created InvenioTask object
 *
 * @throws When the API request fails or returns a non-201 status code
 * @throws When there's a network error or other unexpected error during the request
 */
export const createImporterTask = async (
  task: InvenioNewImportTask
): Promise<InvenioTask> => {
  const payload = {
    title: task.title,
    description: task.description,
    mode: task.mode,
    status: task.status,
    record_type: task.recordType,
    serializer: task.serializer,
    start_time: task.startTime,
    end_time: task.endTime
  };

  try {
    const response = await apiClient.post<InvenioTask>(
      '/api/importer-tasks',
      payload
    );

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Failed to create task: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(
      `Error creating task: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
