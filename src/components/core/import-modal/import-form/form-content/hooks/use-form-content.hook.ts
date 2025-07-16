import { getRecordTypes, getSerializers } from '@/services';
import type { ImporterTaskConfig } from '@/types';
import { useFormikContext } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import type { ImportFormValues } from '../../import-form.types';

/**
 * Custom hook to manage form content for the import modal.
 *
 * @returns An object containing the current form values, submission function, loading state, and validation state.
 */
export const useFormContent = () => {
  const [configs, setConfigs] = useState<Record<string, ImporterTaskConfig>>(
    {}
  );
  const [isLoading, setIsLoading] = useState(true);
  const { values, submitForm, isSubmitting, isValid } =
    useFormikContext<ImportFormValues>();

  /**
   * Fetches available record types and their corresponding serializer configurations.
   *
   * This function retrieves all record types from the API, then for each type,
   * fetches its associated serializer configuration. The configurations are stored
   * in a record mapping type names to their ImporterTaskConfig objects.
   *
   * @async
   * @returns A promise that resolves when all record types and configurations have been fetched
   * @throws Will log errors to console if fetching record types or serializers fails
   */
  const fetchRecordTypes = useCallback(async () => {
    try {
      const types = await getRecordTypes();
      const newConfigs: Record<string, ImporterTaskConfig> = {};

      for (const type of types) {
        const serializer = await getSerializers(type);
        if (serializer) {
          newConfigs[type] = serializer;
        }
      }

      setConfigs(newConfigs);
    } catch (error) {
      console.error('Error fetching record types:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecordTypes();
  }, [fetchRecordTypes]);

  return {
    configs,
    isLoading,
    values,
    submitForm,
    isSubmitting,
    isValid
  };
};
