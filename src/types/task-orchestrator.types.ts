export interface TaskOrchestrationOptions {
  autoValidate?: boolean;
  autoExecute?: boolean;
  onProgress?: (step: OrchestrationSteps, progress?: number) => void;
  onError?: (error: Error, step: OrchestrationSteps) => void;
}

export const OrchestrationStepsEnum = {
  CREATING_TASK: 'Creating Task',
  UPLOADING_METADATA: 'Uploading Metadata',
  UPLOADING_FILES: 'Uploading Files',
  UPDATING_METADATA: 'Updating Metadata',
  UPDATING_FILES: 'Updating Files',
  VALIDATING: 'Validating',
  EXECUTING: 'Executing',
  UPDATING: 'Updating'
} as const;

export type OrchestrationSteps =
  (typeof OrchestrationStepsEnum)[keyof typeof OrchestrationStepsEnum];

export interface FileUploadProgress {
  fileName: string;
  loaded: number;
  total: number;
  percentage: number;
}
