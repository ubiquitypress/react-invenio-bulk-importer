import React, { useCallback, useState } from 'react';
import {
  Button,
  Icon,
  Modal,
  ModalContent,
  ModalHeader
} from 'semantic-ui-react';
import { useSearch } from '../search/provider';
import { ImportForm } from './import-form';

export const ImportModal = () => {
  const [open, setOpen] = useState(false);
  const { refreshSearch } = useSearch();

  // Callback to handle successful form submission
  // Closes the modal and refreshes the search results
  const handleSubmitSuccess = useCallback(() => {
    refreshSearch();
    setOpen(false);
  }, [refreshSearch]);

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
        <ImportForm onSubmit={handleSubmitSuccess} />
      </ModalContent>
    </Modal>
  );
};
