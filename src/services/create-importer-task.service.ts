import { apiClient } from '@/api';
import type { InvenioNewImportTask } from '@/types';

export const createImporterTask = async (task: InvenioNewImportTask) => {
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
    const response = await apiClient.post('/api/importer-tasks', payload);

    if (response.status === 201) {
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
