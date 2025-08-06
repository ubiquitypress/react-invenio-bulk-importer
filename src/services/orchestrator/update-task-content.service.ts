import type { TaskOrchestrationOptions } from '@/types';
import { addTaskMetadata } from '../tasks';
import { uploadTaskFiles } from './upload-task-files.service';

/**
 * Updates an existing task with new metadata and/or files
 */
export const updateTaskContent = async (
  taskId: string,
  metadata?: File | null,
  files?: File[],
  options: TaskOrchestrationOptions = {}
): Promise<void> => {
  const { onProgress, onError } = options;

  try {
    onProgress?.('Updating', 0);

    // Add Task Metadata
    if (metadata) {
      onProgress?.('Updating Metadata', 0);
      await addTaskMetadata(taskId, metadata);
      onProgress?.('Updating Metadata', 100);
    }

    // Upload Task Files
    if (files && files.length > 0) {
      await uploadTaskFiles(taskId, files, progress => {
        onProgress?.('Updating Files', progress.percentage);
      });
    }

    // Final progress update
    onProgress?.('Updating', 100);
  } catch (error) {
    const err =
      error instanceof Error
        ? error
        : new Error('Unknown error during task update');
    onError?.(err, 'Updating');
    throw err;
  }
};
