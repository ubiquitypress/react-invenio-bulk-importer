import React from 'react';
import { BaseForm } from 'react-invenio-forms';
import { object, string } from 'yup';
import { FormContent } from './form-content';

export interface ImportFormState {
  title: string;
  description: string;
  mode: 'import' | 'delete';
  status: string;
  startTime: null;
  endTime: null;
  recordType: string;
  serializer: string;
}

const initialValues: ImportFormState = {
  title: '',
  description: '',
  mode: 'import',
  status: '',
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

export const ImportForm = () => {
  const handleSubmit = (values: ImportFormState) => {
    console.log('Form submitted with values:', values);
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
