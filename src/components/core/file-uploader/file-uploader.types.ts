export type FileUploadStatus =
  | 'idle'
  | 'initializing'
  | 'uploading'
  | 'committing'
  | 'completed'
  | 'error';

export interface FileUploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface UploadableFile {
  file: File;
  id: string;
  status: FileUploadStatus;
  progress?: FileUploadProgress;
  error?: string;
}

export interface FileUploaderProps {
  taskId?: string;
  value?: File[];
  onChange: (files: File[]) => void;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  error?: string;
}
