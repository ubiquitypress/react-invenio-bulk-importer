import { TASK_OPTION_KEYS } from '@/types';
import { boolean, object, string } from 'yup';
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
    serializer: '',
    options: {}
  },
  metadata: null,
  files: []
};

export const FORM_VALIDATION_SCHEMA = object({
  task: object({
    title: string().required('Title is required'),
    recordType: string().required('Record type is required'),
    serializer: string().required('Serializer is required'),
    mode: string().required('Mode is required'),
    options: object(
      Object.fromEntries(
        TASK_OPTION_KEYS.map(optionKey => [optionKey, boolean()])
      )
    )
  }),
  metadata: object().nullable()
});
