import { deleteImporterTask } from '@/services';
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

  return (
    <TableRow key={index}>
      <TableCell>{result.title || 'No title'}</TableCell>
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
