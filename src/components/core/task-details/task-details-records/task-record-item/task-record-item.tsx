import { runImporterRecord } from '@/services';
import type { InvenioImporterRecord } from '@/types';
import { capitalizeFirstLetter, getStatusColor } from '@/utils';
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
import { DetailsModal } from './details-modal';
import { styles } from './task-record-item.styles';

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
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [detailsModalInitialTab, setDetailsModalInitialTab] = useState(0);

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

  const getErrorsTabIndex = () => {
    // Basic Info = 0, Source Data = 1, Errors = 2 (if exists), Files = last
    return hasErrors ? 2 : -1;
  };

  const getStatusIcon = (color: string) => {
    if (color === 'red') {
      return 'times';
    } else if (color === 'green' || color === 'blue') {
      return 'check';
    }

    return 'question';
  };

  const actionOptions = [
    ...(hasErrors
      ? [
          {
            key: 'view-errors',
            text: 'View Errors',
            value: 'view-errors',
            icon: 'exclamation triangle',
            onClick: () => {
              setDetailsModalInitialTab(getErrorsTabIndex());
              setOpenDetailsModal(true);
            }
          }
        ]
      : []),
    {
      key: 'run',
      disabled: result.status === 'success',
      text: 'Run Record',
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
    },
    {
      key: 'view-details',
      text: 'View Details',
      value: 'view-details',
      icon: 'info circle',
      onClick: () => {
        setDetailsModalInitialTab(0);
        setOpenDetailsModal(true);
      }
    }
  ];

  return (
    <TableRow key={index}>
      <TableCell>
        <div className={styles.idContainer}>
          <code className={styles.codeElement}>
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
        <div className={styles.titleContainer}>
          {result.src_data?.title || (
            <em className={styles.noTitle}>No Title Available</em>
          )}
        </div>
      </TableCell>

      {/* Status Column with Label */}
      <TableCell>
        <Label color={statusColor} size='small'>
          <Icon name={getStatusIcon(statusColor)} />
          {capitalizeFirstLetter(result.status)}
        </Label>

        {hasErrors && (
          <Popup
            content={`${result.errors.length} error${result.errors.length > 1 ? 's' : ''} found`}
            trigger={
              <Icon
                name='exclamation triangle'
                color='red'
                className={styles.errorIcon}
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
                disabled={option.disabled}
                onClick={option.onClick}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <DetailsModal
          record={result}
          open={openDetailsModal}
          onClose={() => setOpenDetailsModal(false)}
          initialTab={detailsModalInitialTab}
        />
      </TableCell>
    </TableRow>
  );
};
