import { object, string } from 'yup';
import type { ImportFormValues } from './import-form.types';

export const INITIAL_FORM_VALUES: ImportFormValues = {
  task: {
    title: '',
    description: '',
    mode: 'import',
    status: 'created',
    startTime: null,
    endTime: null,
    recordType: '',
    serializer: ''
  },
  metadata: null
};

export const FORM_VALIDATION_SCHEMA = object({
  task: object({
    title: string().required('Title is required'),
    recordType: string().required('Record type is required'),
    serializer: string().required('Serializer is required'),
    mode: string().required('Mode is required')
  }),
  metadata: object().nullable()
});
