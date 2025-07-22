import { StatusLabel } from '@/components/ui';
import { useImporterTask } from '@/hooks';
import type { InvenioTask } from '@/types';
import { capitalizeFirstLetter, formatDate } from '@/utils';
import React from 'react';
import { Button, Dropdown, Icon, TableCell, TableRow } from 'semantic-ui-react';
import { useSearch } from '../provider';

interface ResultItemProps {
  result: InvenioTask;
  index: number;
}

export const ResultItem: React.FC<ResultItemProps> = ({ result, index }) => {
  const { refreshSearch, config } = useSearch();

  const {
    deleteTask,
    validateTask,
    runBulkImport,
    getStatus,
    isDeleting,
    isValidating,
    isBulkImporting,
    isGettingStatus,
    error,
    clearError
  } = useImporterTask(result.id, {
    onDeleteSuccess: () => {
      refreshSearch();
    },
    onValidateSuccess: () => {
      refreshSearch();
    },
    onBulkImportSuccess: () => {
      refreshSearch();
    },
    onStatusChangeSuccess: () => {
      refreshSearch();
    }
  });

  if (!result) {
    return null;
  }

  // Helper function to get loading text for dropdown
  const getActionText = (action: string, isLoading: boolean) => {
    if (isLoading) {
      return `${action}...`;
    }
    return action;
  };

  // Helper function to check if any operation is loading
  const isAnyOperationLoading =
    isDeleting || isValidating || isBulkImporting || isGettingStatus;

  return (
    <TableRow key={index}>
      <TableCell>
        <a href={`${config.resultPath}/${result.id}`}>
          {result.title || 'No title'}
        </a>
      </TableCell>
      <TableCell>{formatDate(result.created)}</TableCell>
      <TableCell>
        <StatusLabel status={result.status}>
          {capitalizeFirstLetter(result.status)}
        </StatusLabel>
      </TableCell>
      <TableCell>{result.records_status?.total_records ?? 0}</TableCell>
      <TableCell>{result.serializer}</TableCell>
      <TableCell>{capitalizeFirstLetter(result.mode)}</TableCell>
      <TableCell style={{ width: '220px' }}>
        {error && (
          <div style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>
            {error.message}
            <Button
              onClick={clearError}
              style={{ marginLeft: '5px', fontSize: '10px' }}
            >
              Clear
            </Button>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Dropdown
            text={isAnyOperationLoading ? 'Processing...' : 'Select Action'}
            floating
            labeled
            className='icon'
            disabled={isAnyOperationLoading}
            options={[
              {
                key: 'download',
                text: 'Download',
                value: 'download',
                disabled: true
              },
              {
                key: 'validate',
                text: getActionText('Retry Validation', isValidating),
                value: 'validate',
                disabled: isAnyOperationLoading,
                onClick: () => validateTask()
              },
              {
                key: 'load',
                text: getActionText('Load Bulk Import', isBulkImporting),
                value: 'load',
                disabled: isAnyOperationLoading,
                onClick: () => runBulkImport()
              },
              {
                key: 'status',
                text: getActionText('Get Status', isGettingStatus),
                value: 'status',
                disabled: isAnyOperationLoading,
                onClick: () => getStatus()
              },
              {
                key: 'delete',
                text: getActionText('Delete', isDeleting),
                value: 'delete',
                disabled: isAnyOperationLoading,
                onClick: () => deleteTask()
              }
            ]}
          />
          <Button
            basic
            size='tiny'
            disabled={isAnyOperationLoading}
            as='a'
            href={`${config.resultPath}/${result.id}`}
          >
            <Icon name='eye' />
            View
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
