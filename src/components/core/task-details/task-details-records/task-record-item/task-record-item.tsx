import type { InvenioImporterRecord } from '@/types';
import { capitalizeFirstLetter, getStatusColor } from '@/utils';
import { runImporterRecord } from '@/services';
import React, { useState } from 'react';
import {
  Button,
  Dropdown,
  Icon,
  Label,
  Popup,
  TableCell,
  TableRow
} from 'semantic-ui-react';
import { ErrorModal } from './error-modal';

export interface TaskRecordItemProps {
  result: InvenioImporterRecord;
  index: number;
}

export const TaskRecordItem: React.FC<TaskRecordItemProps> = ({
  result,
  index
}) => {
  const [copyState, setCopyState] = useState<'idle' | 'copying' | 'copied'>(
    'idle'
  );
  const [openModal, setOpenModal] = useState(false);

  if (!result) {
    return null;
  }

  const handleCopyId = async () => {
    try {
      setCopyState('copying');
      await navigator.clipboard.writeText(result.id);
      setCopyState('copied');
      setTimeout(() => {
        setCopyState('idle');
      }, 2000);
    } catch {
      setCopyState('idle');
    }
  };

  const hasErrors = result.errors && result.errors.length > 0;
  const statusColor = getStatusColor(result.status);

  const getStatusIcon = (color: string) => {
    if (color === 'red') {
      return 'times';
    }
    if (color === 'green') {
      return 'check';
    }
    return undefined;
  };

  const actionOptions = [
    ...(hasErrors
      ? [
          {
            key: 'view-errors',
            text: 'View Errors',
            value: 'view-errors',
            icon: 'exclamation triangle',
            onClick: () => setOpenModal(true)
          }
        ]
      : []),
    {
      key: 'run',
      text: 'Run',
      value: 'run',
      icon: 'play',
      onClick: async () => {
        try {
          await runImporterRecord(result.id);
          console.log(`Record ${result.id} is being processed.`);
        } catch (error) {
          console.error('Error running record:', error);
        }
      }
    }
  ];

  return (
    <TableRow key={index}>
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <code style={{ fontSize: '0.9em', color: '#666' }}>
            {result.id.length > 20
              ? `${result.id.substring(0, 20)}…`
              : result.id}
          </code>
          <Popup
            content={copyState === 'copied' ? 'Copied!' : 'Copy ID'}
            trigger={
              <Button
                size='mini'
                circular
                icon
                loading={copyState === 'copying'}
                onClick={handleCopyId}
                color={copyState === 'copied' ? 'green' : undefined}
              >
                <Icon name={copyState === 'copied' ? 'check' : 'copy'} />
              </Button>
            }
            position='top center'
            size='mini'
          />
        </div>
      </TableCell>

      {/* Title Column */}
      <TableCell>
        <div style={{ maxWidth: '300px' }}>
          {result.src_data?.title || (
            <em style={{ color: '#999' }}>No Title Available</em>
          )}
        </div>
      </TableCell>

      {/* Status Column with Label */}
      <TableCell>
        <Label color={statusColor} size='small'>
          <Icon name={getStatusIcon(statusColor) || 'circle notched'} />
          {capitalizeFirstLetter(result.status)}
        </Label>

        {hasErrors && (
          <Popup
            content={`${result.errors.length} error${result.errors.length > 1 ? 's' : ''} found`}
            trigger={
              <Icon
                name='exclamation triangle'
                color='red'
                style={{ marginLeft: '0.5rem', cursor: 'help' }}
              />
            }
            position='top center'
            size='mini'
          />
        )}
      </TableCell>

      {/* Actions Column */}
      <TableCell textAlign='right'>
        <Dropdown
          button
          className='icon'
          floating
          labeled
          icon='ellipsis horizontal'
          text='Actions'
          size='mini'
        >
          <Dropdown.Menu>
            {actionOptions.map(option => (
              <Dropdown.Item
                key={option.key}
                icon={option.icon}
                text={option.text}
                onClick={option.onClick}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <ErrorModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          result={result}
        />
      </TableCell>
    </TableRow>
  );
};
