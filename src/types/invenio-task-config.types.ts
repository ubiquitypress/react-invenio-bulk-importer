import type { TaskOptions } from './task-options.types';

export interface ImporterTaskConfig {
  serializers: string[];
  options: TaskOptions;
}
