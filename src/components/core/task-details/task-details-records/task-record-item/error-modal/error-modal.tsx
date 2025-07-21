import type { InvenioImporterRecord } from '@/types';
import React from 'react';
import { Button, Icon, List, Message, Modal } from 'semantic-ui-react';

interface ErrorModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  result: InvenioImporterRecord;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  openModal,
  setOpenModal,
  result
}) => {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)} closeIcon>
      <Modal.Header>Record Errors</Modal.Header>
      <Modal.Content>
        {result.errors && result.errors.length > 0 ? (
          <Message negative icon>
            <Icon name='exclamation triangle' />
            <Message.Content>
              <Message.Header>Serializer validation failed</Message.Header>
              <List bulleted>
                {result.errors.map(error => (
                  <List.Item key={`${error.type}-${result.id}`}>
                    {error.msg}
                  </List.Item>
                ))}
              </List>
            </Message.Content>
          </Message>
        ) : (
          <Message positive icon>
            <Icon name='check circle' />
            <Message.Content>
              <Message.Header>Validation successful</Message.Header>
              No errors found for this record.
            </Message.Content>
          </Message>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpenModal(false)} content='Close' primary />
      </Modal.Actions>
    </Modal>
  );
};
