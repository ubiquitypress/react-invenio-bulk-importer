import type { TaskOptions } from './task-options.types';

export interface InvenioNewImportTask {
  title: string;
  description: string;
  mode: 'import' | 'delete';
  status: string;
  startTime?: null;
  endTime?: null;
  recordType: string;
  serializer: string;
  options?: TaskOptions;
}
