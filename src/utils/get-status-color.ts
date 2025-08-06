import type {
  InvenioImporterRecordStates,
  InvenioImporterTaskStates
} from '@/types';

export const getStatusColor = (
  status: InvenioImporterTaskStates | InvenioImporterRecordStates
) => {
  switch (status) {
    case 'success':
      return 'green';
    case 'validation failed':
    case 'serializer validation failed':
    case 'import failed':
    case 'imported with failures':
    case 'validated with failures':
    case 'damaged':
      return 'red';
    case 'validated':
    case 'created':
      return 'blue';
    case 'importing':
    case 'validating':
      return 'yellow';
    default:
      return 'grey';
  }
};
