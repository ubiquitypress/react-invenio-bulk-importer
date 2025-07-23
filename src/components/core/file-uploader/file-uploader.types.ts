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
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  error?: string;
}
