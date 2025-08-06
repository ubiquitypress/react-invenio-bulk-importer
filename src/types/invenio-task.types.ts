import type { InvenioImporterRecordStates } from './invenio-importer-record.types';

export interface InvenioTask {
  id: string;
  created: string;
  updated: string;
  links: {
    self: string;
    self_html: string;
    edit_html: string;
    metadata: string;
  };
  revision_id: number;
  title: string;
  description: string;
  mode: string;
  record_type: string;
  serializer: string;
  start_time?: string | null;
  end_time?: string | null;
  records_status?: Record<InvenioImporterRecordStates, number> & {
    total_records: number;
  };
  status: InvenioImporterTaskStates;
  files: {
    enabled: boolean;
  };
  started_by: {
    id: number;
    username: string | null;
    email: string;
  };
  options: {
    doi_minting: boolean;
    publish: boolean;
  };
}

export const ImporterTaskStates = {
  CREATED: 'created',
  VALIDATING: 'validating',
  VALIDATION_FAILED: 'validated with failures',
  VALIDATED: 'validated',
  IMPORTING: 'importing',
  IMPORT_FAILED: 'imported with failures',
  SUCCESS: 'success',
  DAMAGED: 'damaged'
} as const;

export type InvenioImporterTaskStates =
  (typeof ImporterTaskStates)[keyof typeof ImporterTaskStates];
