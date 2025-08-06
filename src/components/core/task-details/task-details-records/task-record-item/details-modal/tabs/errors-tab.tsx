import type { InvenioImporterRecord } from '@/types';
import React from 'react';
import { Message, Segment } from 'semantic-ui-react';

interface ErrorsTabProps {
  record: InvenioImporterRecord;
}

export const ErrorsTab: React.FC<ErrorsTabProps> = ({ record }) => {
  return (
    <Segment basic>
      {record.errors.map((error, index) => (
        <Message key={`error-${index}-${error.type}`} negative>
          <Message.Header>{error.type}</Message.Header>
          <p>
            <strong>Location:</strong> {error.loc}
          </p>
          <p>
            <strong>Message:</strong> {error.msg}
          </p>
        </Message>
      ))}
    </Segment>
  );
};
