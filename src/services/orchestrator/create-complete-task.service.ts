import type {
  InvenioNewImportTask,
  InvenioTask,
  TaskOrchestrationOptions
} from '@/types';
import { addTaskMetadata, createImporterTask } from '../tasks';
import { executeTaskWorkflow } from './execute-task-workflow.service';
import { uploadTaskFiles } from './upload-task-files.service';

/**
 * Creates a complete import task with metadata and files
 */
export const createCompleteTask = async (
  taskData: InvenioNewImportTask,
  metadata?: File | null,
  files?: File[],
  options: TaskOrchestrationOptions = {}
): Promise<InvenioTask> => {
  const {
    autoValidate = false,
    autoExecute = false,
    onProgress,
    onError
  } = options;

  try {
    // Initialize task creation progress
    onProgress?.('Creating Task', 0);
    const task = await createImporterTask(taskData);
    if (!task) {
      throw new Error('Failed to create import task');
    }
    onProgress?.('Creating Task', 100);

    // Upload Metadata if provided
    if (metadata) {
      onProgress?.('Uploading Metadata', 0);
      await addTaskMetadata(task.id, metadata);
      onProgress?.('Uploading Metadata', 100);
    }

    // Upload Files if provided
    if (files && files.length > 0) {
      await uploadTaskFiles(task.id, files, progress => {
        onProgress?.('Uploading Files', progress.percentage);
      });
    }

    // Update Task with Metadata and Files
    if (autoValidate && metadata) {
      await executeTaskWorkflow(task.id, {
        autoExecute,
        onProgress,
        onError
      });
    }

    return task;
  } catch (error) {
    const err =
      error instanceof Error
        ? error
        : new Error('Unknown error during task creation');
    onError?.(err, 'Creating Task');
    throw err;
  }
};
