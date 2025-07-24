import { useMemo } from 'react';
import type { CardConfig, ImportStats } from '../import-status-cards.types';

export const useImportStatusConfig = (stats: ImportStats): CardConfig[] => {
  return useMemo(() => {
    const { totalRecords, validatedRecords, errorRecords, successRecords } =
      stats;

    const validationProgress =
      totalRecords > 0 ? (validatedRecords / totalRecords) * 100 : 0;
    const errorsProgress =
      totalRecords > 0 ? (errorRecords / totalRecords) * 100 : 0;
    const importProgress =
      totalRecords > 0 ? (successRecords / totalRecords) * 100 : 0;

    return [
      {
        color: 'blue',
        icon: 'check circle',
        title: 'Validation',
        value: validatedRecords,
        label: `of ${totalRecords} Validated`,
        progress: validationProgress,
        progressLabel: `${validationProgress.toFixed(1)}% Complete`
      },
      {
        color: 'red',
        icon: 'exclamation triangle',
        title: 'Errors',
        value: errorRecords,
        label: 'with Errors',
        progress: errorsProgress,
        progressLabel: `${errorsProgress.toFixed(1)}% of Total`
      },
      {
        color: 'green',
        icon: 'upload',
        title: 'Import',
        value: successRecords,
        label: 'Successfully Imported',
        progress: importProgress,
        progressLabel: `${importProgress.toFixed(1)}% Complete`
      }
    ];
  }, [stats]);
};
