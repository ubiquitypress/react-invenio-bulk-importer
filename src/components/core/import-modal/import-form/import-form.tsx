import { createImporterTask } from '@/services';
import React from 'react';
import { BaseForm } from 'react-invenio-forms';
import { FormContent } from './form-content';
import {
  FORM_VALIDATION_SCHEMA,
  INITIAL_FORM_VALUES
} from './import-form.consts';
import type { ImportFormProps, ImportFormValues } from './import-form.types';

export const ImportForm: React.FC<ImportFormProps> = ({ onSubmit }) => {
  const handleSubmit = async (values: ImportFormValues) => {
    try {
      const response = await createImporterTask(values.task);
      onSubmit?.();
      if (response) {
        console.log('Import task created successfully:', response);
      } else {
        console.error('Failed to create import task');
      }
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
