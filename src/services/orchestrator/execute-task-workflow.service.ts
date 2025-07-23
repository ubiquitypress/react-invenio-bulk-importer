import type { InvenioTask, TaskOrchestrationOptions } from '@/types';
import {
  executeBulkImport,
  getTaskStatus,
  validateImporterTask
} from '../tasks';

/**
 * Executes the validation and optional import workflow
 */
export const executeTaskWorkflow = async (
  taskId: string,
  options: TaskOrchestrationOptions = {}
): Promise<InvenioTask> => {
  const { autoExecute = false, onProgress, onError } = options;

  try {
    // Start validation process
    onProgress?.('Validating', 0);
    await validateImporterTask(taskId);
    onProgress?.('Validating', 50);

    // Check status after validation
    let taskStatus = await getTaskStatus(taskId);
    onProgress?.('Validating', 100);

    // Auto-execute if requested and validation passed
    if (
      autoExecute &&
      (taskStatus.status === 'validated' ||
        taskStatus.status === 'validated with failures')
    ) {
      onProgress?.('Executing', 0);
      await executeBulkImport(taskId);
      onProgress?.('Executing', 50);

      // Check final status
      taskStatus = await getTaskStatus(taskId);
      onProgress?.('Executing', 100);
    }

    return taskStatus;
  } catch (error) {
    const err =
      error instanceof Error
        ? error
        : new Error('Unknown error during workflow execution');
    onError?.(err, 'Executing');
    throw err;
  }
};
