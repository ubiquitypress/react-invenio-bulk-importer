import type { InvenioImporterRecord } from '@/types';
import { formatDate } from '@/utils';
import React from 'react';
import { List, Segment } from 'semantic-ui-react';

interface BasicInfoTabProps {
  record: InvenioImporterRecord;
}

export const BasicInfoTab: React.FC<BasicInfoTabProps> = ({ record }) => {
  return (
    <Segment>
      <List>
        <List.Item>
          <List.Icon name='tag' />
          <List.Content>
            <List.Header>Record ID</List.Header>
            <List.Description>{record.id}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='calendar' />
          <List.Content>
            <List.Header>Created</List.Header>
            <List.Description>{formatDate(record.created)}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='edit' />
          <List.Content>
            <List.Header>Updated</List.Header>
            <List.Description>{formatDate(record.updated)}</List.Description>
          </List.Content>
        </List.Item>
        {record.generated_record_id && (
          <List.Item>
            <List.Icon name='file alternate' />
            <List.Content>
              <List.Header>Generated Record ID</List.Header>
              <List.Description>
                <a
                  href={`/records/${record.generated_record_id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  /{record.generated_record_id}
                </a>
              </List.Description>
            </List.Content>
          </List.Item>
        )}
      </List>
    </Segment>
  );
};
