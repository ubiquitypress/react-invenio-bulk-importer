import { StatusIcon } from '@/components/ui';
import type { InvenioImporterRecord } from '@/types';
import { capitalizeFirstLetter } from '@/utils';
import React, { useState } from 'react';
import { Button, Dropdown, Icon, TableCell, TableRow } from 'semantic-ui-react';
import { ErrorModal } from './error-modal';

export interface TaskRecordItemProps {
  result: InvenioImporterRecord;
  index: number;
}

export const TaskRecordItem: React.FC<TaskRecordItemProps> = ({
  result,
  index
}) => {
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const [openModal, setOpenModal] = useState(false);

  if (!result) {
    return null;
  }

  const handleCopyId = () => {
    navigator.clipboard.writeText(result.id);
    setCopyState('copied');
    setTimeout(() => {
      setCopyState('idle');
    }, 2000);
  };

  const dropdownOptions = [
    {
      key: 'modal',
      text: (
        <Button
          size='mini'
          content='View error(s)'
          onClick={e => {
            e.stopPropagation();
            setOpenModal(true);
          }}
        />
      ),
      value: 'modal'
    }
  ];

  return (
    <TableRow key={index}>
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {result.id}
          <Button size='mini' circular icon>
            <Icon
              onClick={handleCopyId}
              name={copyState === 'copied' ? 'check' : 'copy'}
            />
          </Button>
        </div>
      </TableCell>
      <TableCell>{result.src_data.title || 'No Title'}</TableCell>
      <TableCell>{capitalizeFirstLetter(result.status)}</TableCell>
      <TableCell>
        <StatusIcon status={result.status} size='large' />
      </TableCell>
      <TableCell style={{ width: '220px' }}>
        <Dropdown
          text='Select Option'
          floating
          labeled
          className='icon'
          options={dropdownOptions}
        />
        <ErrorModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          result={result}
        />
      </TableCell>
    </TableRow>
  );
};
