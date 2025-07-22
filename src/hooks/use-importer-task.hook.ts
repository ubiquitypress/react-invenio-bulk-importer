import {
  deleteImporterTask,
  executeBulkImport,
  getTaskStatus,
  validateImporterTask
} from '@/services';
import type { InvenioTask } from '@/types';
import { useCallback, useState } from 'react';

// biome-ignore lint/suspicious/noExplicitAny: Using any for flexibility in task handling
type TempAny = any; // TODO: Replace with a more specific type

interface UseImporterTaskOptions {
  onDeleteSuccess?: () => void;
  onDeleteError?: (error: Error) => void;
  onValidateSuccess?: (result: TempAny) => void;
  onValidateError?: (error: Error) => void;
  onBulkImportSuccess?: (response: TempAny) => void;
  onBulkImportError?: (error: Error) => void;
  onStatusChangeSuccess?: (task: InvenioTask) => void;
  onStatusChangeError?: (error: Error) => void;
}

interface TaskState {
  isDeleting: boolean;
  isValidating: boolean;
  isBulkImporting: boolean;
  isGettingStatus: boolean;
  error: Error | null;
}

interface UseImporterTaskReturn extends TaskState {
  deleteTask: () => Promise<void>;
  validateTask: () => Promise<TempAny>;
  runBulkImport: () => Promise<TempAny>;
  getStatus: () => Promise<TempAny>;
  clearError: () => void;
}

/**
 * Custom React hook for managing importer task operations.
 *
 * Provides functionality to delete, validate, execute bulk import, and get status
 * of an importer task with loading states and error handling.
 *
 * @param taskId - The unique identifier of the importer task
 * @param options - Configuration options including callback handlers for success/error events
 * @returns An object containing state flags, action methods, and error handling utilities
 */
export const useImporterTask = (
  taskId: string,
  options: UseImporterTaskOptions = {}
): UseImporterTaskReturn => {
  const [state, setState] = useState<TaskState>({
    isDeleting: false,
    isValidating: false,
    isBulkImporting: false,
    isGettingStatus: false,
    error: null
  });

  const {
    onDeleteSuccess,
    onDeleteError,
    onValidateSuccess,
    onValidateError,
    onBulkImportSuccess,
    onBulkImportError,
    onStatusChangeSuccess,
    onStatusChangeError
  } = options;

  /**
   * Clears the current error state.
   */
  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  /**
   * Deletes the specified importer task.
   *
   * @returns A promise that resolves when the task is successfully deleted
   */
  const deleteTask = useCallback(async (): Promise<void> => {
    setState(prev => ({ ...prev, isDeleting: true, error: null }));

    try {
      const deleted = await deleteImporterTask(taskId);

      if (!deleted) {
        throw new Error(`Failed to delete task ${taskId}`);
      }

      onDeleteSuccess?.();
    } catch (error) {
      const errorObj =
        error instanceof Error ? error : new Error('Unknown error');
      setState(prev => ({ ...prev, error: errorObj }));
      onDeleteError?.(errorObj);
      throw errorObj; // Re-throw for caller handling
    } finally {
      setState(prev => ({ ...prev, isDeleting: false }));
    }
  }, [taskId, onDeleteSuccess, onDeleteError]);

  /**
   * Validates the importer task and returns the validation result.
   *
   * @returns The validation result of the task
   */
  const validateTask = useCallback(async () => {
    setState(prev => ({ ...prev, isValidating: true, error: null }));

    try {
      const validationResult = await validateImporterTask(taskId);

      if (!validationResult) {
        throw new Error(`Validation failed for task ${taskId}`);
      }

      onValidateSuccess?.(validationResult);
      return validationResult;
    } catch (error) {
      const errorObj =
        error instanceof Error ? error : new Error('Unknown error');
      setState(prev => ({ ...prev, error: errorObj }));
      onValidateError?.(errorObj);
      throw errorObj;
    } finally {
      setState(prev => ({ ...prev, isValidating: false }));
    }
  }, [taskId, onValidateSuccess, onValidateError]);

  /**
   * Executes the bulk import for the specified task.
   *
   * @returns The response from the bulk import execution
   */
  const runBulkImport = useCallback(async () => {
    setState(prev => ({ ...prev, isBulkImporting: true, error: null }));

    try {
      const response = await executeBulkImport(taskId);

      if (!response) {
        throw new Error(`Failed to execute bulk import for task ${taskId}`);
      }

      onBulkImportSuccess?.(response);
      return response;
    } catch (error) {
      const errorObj =
        error instanceof Error ? error : new Error('Unknown error');
      setState(prev => ({ ...prev, error: errorObj }));
      onBulkImportError?.(errorObj);
      throw errorObj;
    } finally {
      setState(prev => ({ ...prev, isBulkImporting: false }));
    }
  }, [taskId, onBulkImportSuccess, onBulkImportError]);

  /**
   * Fetches the current status of the importer task.
   */
  const getStatus = useCallback(async () => {
    setState(prev => ({ ...prev, isGettingStatus: true, error: null }));

    try {
      const status = await getTaskStatus(taskId);

      if (!status) {
        throw new Error(`Failed to retrieve status for task ${taskId}`);
      }

      onStatusChangeSuccess?.(status);
      return status;
    } catch (error) {
      const errorObj =
        error instanceof Error ? error : new Error('Unknown error');
      setState(prev => ({ ...prev, error: errorObj }));
      onStatusChangeError?.(errorObj);
      throw errorObj;
    } finally {
      setState(prev => ({ ...prev, isGettingStatus: false }));
    }
  }, [taskId, onStatusChangeSuccess, onStatusChangeError]);

  return {
    // State
    isDeleting: state.isDeleting,
    isValidating: state.isValidating,
    isBulkImporting: state.isBulkImporting,
    isGettingStatus: state.isGettingStatus,
    error: state.error,

    // Actions
    deleteTask,
    validateTask,
    runBulkImport,
    getStatus,
    clearError
  };
};
