import type { SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';

export interface CardConfig {
  color: SemanticCOLORS;
  icon: SemanticICONS;
  title: string;
  value: number;
  label: string;
  progress: number;
  progressLabel: string;
}

export interface ImportStats {
  totalRecords: number;
  validatedRecords: number;
  errorRecords: number;
  successRecords: number;
}
