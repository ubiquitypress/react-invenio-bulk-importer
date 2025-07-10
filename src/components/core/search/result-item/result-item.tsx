import type { InvenioTask } from '@/types';
import React from 'react';
import { Button, Dropdown, Icon, TableCell, TableRow } from 'semantic-ui-react';

export const ResultItem = ({
  result,
  index
}: {
  result: InvenioTask;
  index: number;
}) => {
  return (
    <TableRow key={index}>
      <TableCell>{result.title || 'No title'}</TableCell>
      <TableCell>{result.created}</TableCell>
      <TableCell>{result.status}</TableCell>
      <TableCell>999</TableCell>
      <TableCell>999</TableCell>
      <TableCell>{result.serializer}</TableCell>
      <TableCell>{result.mode}</TableCell>
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
                disabled: true
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
