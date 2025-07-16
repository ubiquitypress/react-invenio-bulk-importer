import { createImporterTask } from '@/services';
import type { InvenioNewImportTask } from '@/types';
import React from 'react';
import { BaseForm } from 'react-invenio-forms';
import { object, string } from 'yup';
import { FormContent } from './form-content';

const initialValues: InvenioNewImportTask = {
  title: '',
  description: '',
  mode: 'import',
  status: 'created',
  startTime: null,
  endTime: null,
  recordType: '',
  serializer: ''
};

// Add validation schema
const validationSchema = object({
  title: string().required('Title is required'),
  recordType: string().required('Record type is required'),
  serializer: string().required('Serializer is required'),
  mode: string().required('Mode is required')
});

interface ImportFormProps {
  onSubmit?: () => void;
}

export const ImportForm: React.FC<ImportFormProps> = ({ onSubmit }) => {
  const handleSubmit = async (values: InvenioNewImportTask) => {
    try {
      const response = await createImporterTask(values);
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
        initialValues,
        validationSchema,
        onSubmit: handleSubmit
      }}
    >
      <FormContent />
    </BaseForm>
  );
};
