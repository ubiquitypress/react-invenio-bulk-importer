import {
  addTaskMetadata,
  createImporterTask,
  getTaskStatus,
  validateImporterTask
} from '@/services';
import React from 'react';
import { BaseForm } from 'react-invenio-forms';
import { FormContent } from './form-content';
import {
  FORM_VALIDATION_SCHEMA,
  INITIAL_FORM_VALUES
} from './import-form.consts';
import type { ImportFormProps, ImportFormValues } from './import-form.types';

export const ImportForm: React.FC<ImportFormProps> = ({ onSubmit }) => {
  /**
   * Handles form submission for the import task.
   * @param values The form values submitted by the user.
   */
  const handleSubmit = async (values: ImportFormValues) => {
    try {
      const task = await createImporterTask(values.task);

      if (!task) {
        throw new Error('Failed to create import task');
      }

      if (values.metadata) {
        const addMetadata = await addTaskMetadata(task.id, values.metadata);
        console.log('Metadata added:', addMetadata);
        const validate = await validateImporterTask(task.id);
        console.log('Task validation result:', validate);

        if (validate) {
          const status = await getTaskStatus(task.id);
          console.log('Task status:', status);
        }
      }

      onSubmit?.();
    } catch (error) {
      console.error('Error creating import task:', error);
    }
  };

  return (
    <BaseForm
      formik={{
        initialValues: INITIAL_FORM_VALUES,
        validationSchema: FORM_VALIDATION_SCHEMA,
        onSubmit: handleSubmit
      }}
    >
      <FormContent />
    </BaseForm>
  );
};
