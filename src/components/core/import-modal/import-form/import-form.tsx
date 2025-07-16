import React from 'react';
import { BaseForm } from 'react-invenio-forms';
// import { FormContent } from './form-content';

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

export const ImportForm = () => {
  const handleSubmit = (values: ImportFormState) => {
    // Handle form submission logic here
    console.log('Form submitted with values:', values);
  };

  return (
    <BaseForm formik={{ initialValues }} onSubmit={handleSubmit}>
      <p>TEST</p>
    </BaseForm>
  );
};
