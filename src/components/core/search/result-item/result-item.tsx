import {
  deleteImporterTask,
  executeBulkImport,
  getTaskStatus,
  validateTask
} from '@/services';
import type { InvenioTask } from '@/types';
import { capitalizeFirstLetter, formatDate } from '@/utils';
import React from 'react';
import { Button, Dropdown, Icon, TableCell, TableRow } from 'semantic-ui-react';
import { useSearch } from '../provider';

export const ResultItem = ({
  result,
  index
}: {
  result: InvenioTask;
  index: number;
}) => {
  const { refreshSearch } = useSearch();

  if (!result) {
    return null;
  }

  const handleDeleteTask = async (taskId: string) => {
    try {
      const deleted = await deleteImporterTask(taskId);
      if (deleted) {
        refreshSearch(); // Refresh the search results after deletion
      } else {
        console.error(`Failed to delete task ${taskId}.`);
      }
    } catch (error) {
      console.error(`Error deleting task ${taskId}:`, error);
    }
  };

  const handleValidateTask = async (taskId: string) => {
    try {
      const validationResult = await validateTask(taskId);
      console.log('Validation result:', validationResult);
      refreshSearch(); // Refresh the search results after validation
    } catch (error) {
      console.error(`Error validating task ${taskId}:`, error);
    }
  };

  const handleExecuteBulkImport = async (taskId: string) => {
    try {
      const response = await executeBulkImport(taskId);
      console.log('Bulk import executed:', response);
      refreshSearch(); // Refresh the search results after execution
    } catch (error) {
      console.error(`Error executing bulk import for task ${taskId}:`, error);
    }
  };

  const handleStatusChange = async () => {
    try {
      const status = await getTaskStatus(result.id);
      if (status) {
        refreshSearch();
        console.log(`Current status for task ${result.id}:`, status);
      } else {
        console.error(`Failed to retrieve status for task ${result.id}.`);
      }
    } catch (error) {
      console.error(`Error changing status for task ${result.id}:`, error);
    }
  };

  return (
    <TableRow key={index}>
      <TableCell>
        <a href={result.links.self}>{result.title || 'No title'}</a>
      </TableCell>
      <TableCell>{formatDate(result.created)}</TableCell>
      <TableCell>{capitalizeFirstLetter(result.status)}</TableCell>
      <TableCell>{result.records_status?.total_records ?? 0}</TableCell>
      <TableCell>{0}</TableCell>
      <TableCell>{result.serializer}</TableCell>
      <TableCell>{capitalizeFirstLetter(result.mode)}</TableCell>
      <TableCell style={{ width: '220px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Dropdown
            text='Select Action'
            floating
            labeled
            className='icon'
            options={[
              {
                key: 'download',
                text: 'Download',
                value: 'download',
                disabled: true
              },
              {
                key: 'validate',
                text: 'Retry Validation',
                value: 'validate',
                onClick: () => handleValidateTask(result.id)
              },
              {
                key: 'load',
                text: 'Load Bulk Import',
                value: 'load',
                onClick: () => handleExecuteBulkImport(result.id)
              },
              {
                key: 'status',
                text: 'Get Status',
                value: 'status',
                onClick: handleStatusChange
              },
              {
                key: 'delete',
                text: 'Delete',
                value: 'delete',
                onClick: () => handleDeleteTask(result.id)
              }
            ]}
          />
          <Button basic size='tiny'>
            <Icon name='eye' />
            View
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
