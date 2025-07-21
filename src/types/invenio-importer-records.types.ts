import type { InvenioImporterRecord } from './invenio-importer-record.types';

export interface InvenioImporterRecords {
  hits: {
    hits: InvenioImporterRecord[];
    total: number;
  };
}
