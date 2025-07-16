import type { InvenioNewImportTask } from '@/types';

export interface ImportFormProps {
  onSubmit?: () => void;
}

export interface ImportFormValues {
  task: InvenioNewImportTask;
  metadata: File | null;
}
