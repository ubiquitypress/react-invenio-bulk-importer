import React, { useState } from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader
} from 'semantic-ui-react';

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
      <ModalHeader>
        <Icon name='file alternate' />
        New Import
      </ModalHeader>
      <ModalContent>
        <ModalDescription>
          <Header>
            <p>Upload a file to import records into the system.</p>
            <p>
              Supported formats include CSV, JSON, and XML. Ensure your file
              adheres to the required schema for successful import.
            </p>
            <p>
              After uploading, you can review and confirm the import details
              before finalizing the process.
            </p>
          </Header>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button onClick={() => setOpen(false)}>Close</Button>
        <Button
          labelPosition='left'
          icon
          onClick={() => setOpen(false)}
          positive
        >
          <Icon name='checkmark' />
          Submit
        </Button>
      </ModalActions>
    </Modal>
  );
};
