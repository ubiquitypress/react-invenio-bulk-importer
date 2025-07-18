import { apiClient } from '@/api';

/**
 * Deletes an importer task by its ID.
 *
 * @param taskId - The unique identifier of the importer task to delete
 * @returns A promise that resolves to `true` if the task was successfully deleted (HTTP 204),
 *          or `false` if the deletion failed or an error occurred
 * @throws Will not throw but will log errors to console and return `false` on failure
 */
export const deleteImporterTask = async (taskId: string) => {
  try {
    const response = await apiClient.delete(`/api/importer-tasks/${taskId}`);

    if (response.status === 204) {
      return true;
    } else {
      console.error(`Failed to delete task: ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error(
      `Error deleting task: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
    return false;
  }
};
