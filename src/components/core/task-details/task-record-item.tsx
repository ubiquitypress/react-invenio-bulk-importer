import { StatusLabel } from '@/components/ui/status-label';
import type { InvenioImporterRecord } from '@/types';
import { capitalizeFirstLetter } from '@/utils';
import React from 'react';
import { Dropdown, Icon, Label, Segment } from 'semantic-ui-react';

export const TaskRecordItem = ({
  result,
  index
}: {
  result: InvenioImporterRecord;
  index: number;
}) => {
  if (!result) {
    return null;
  }

  return (
    <Segment key={index}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          <div>
            <Icon name='file alternate outline' />
            {result.src_data.title || 'No title'}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Label size='mini'>
              {capitalizeFirstLetter(result.src_data['resource_type.id'])}
            </Label>
            {new Date(result.created).toLocaleDateString()}
          </div>
        </div>
        <StatusLabel status={result.status}>
          {capitalizeFirstLetter(result.status)}
        </StatusLabel>
        {result.errors && result.errors.length > 0 ? (
          <span style={{ color: 'red' }}>{result.errors.length} errors</span>
        ) : (
          'No errors'
        )}
        <Dropdown
          text='Actions'
          floating
          labeled
          className='icon'
          options={[
            {
              key: 'download',
              text: 'Download',
              value: 'download',
              disabled: true
            }
          ]}
        />
      </div>
    </Segment>
  );
};
