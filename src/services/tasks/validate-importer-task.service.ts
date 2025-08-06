import { apiClient } from '@/api';

/**
 * Validates an importer task by its ID.
 * @param taskId - The ID of the importer task to validate.
 * @returns A promise that resolves to the validation result.
 */
export const validateImporterTask = async (taskId: string) => {
  try {
    const res = await apiClient.post(
      `/api/importer-tasks/${taskId}/validate`,
      {}
    );

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Failed to validate task: ${res.statusText}`);
    }
  } catch (error) {
    throw new Error(
      `Error validating task: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
