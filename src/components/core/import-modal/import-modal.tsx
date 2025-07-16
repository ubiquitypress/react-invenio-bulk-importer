import React, { useState } from 'react';
import {
  Button,
  Icon,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader
} from 'semantic-ui-react';
import { ImportForm } from './import-form';

export const ImportModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color='green' icon labelPosition='left'>
          <Icon name='add' />
          New Import
        </Button>
      }
    >
      <ModalHeader>New Import Task</ModalHeader>
      <ModalContent>
        <ImportForm />
      </ModalContent>
      <ModalActions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </ModalActions>
    </Modal>
  );
};
