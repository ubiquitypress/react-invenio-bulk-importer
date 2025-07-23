import type { UploadableFile } from '@/components/core';

export const getTotalSize = (uploadedFiles: UploadableFile[]) => {
  return uploadedFiles.reduce((total, file) => total + file.file.size, 0);
};

export const getTotalSizeFormatted = (uploadedFiles: UploadableFile[]) => {
  return formatFileSize(getTotalSize(uploadedFiles));
};

/**
 * Formats the total size of selected files into a human-readable string.
 * Uses binary prefixes (Bytes, KB, MB, GB) for formatting.
 * @param bytes - The total size in bytes.
 * @return A formatted string representing the file size.
 */
export const formatFileSize = (bytes: number) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
};
