export interface UploadableFile {
  file: File;
  id: string;
  error?: string;
}

export interface FileUploaderProps {
  taskId?: string;
  value?: File[];
  onChange: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
  maxTotalSize?: number;
  disabled?: boolean;
  error?: string;
}
