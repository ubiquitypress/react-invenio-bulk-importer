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
  start_time: string | null;
  end_time: string | null;
  status: string;
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
