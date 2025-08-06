import type { InvenioImporterRecord } from '@/types';
import React from 'react';
import { Header, Icon, List, Message, Segment, Table } from 'semantic-ui-react';
import { styles } from './files-tab.styles';

interface FilesTabProps {
  record: InvenioImporterRecord;
}

export const FilesTab: React.FC<FilesTabProps> = ({ record }) => {
  const hasFiles =
    (record.record_files?.length ?? 0) > 0 ||
    (record.validated_record_files?.length ?? 0) > 0;

  if (!hasFiles) {
    return (
      <Message info>
        <Message.Header>No Files</Message.Header>
        <p>No files are associated with this record.</p>
      </Message>
    );
  }

  return (
    <Segment basic>
      {record.record_files && record.record_files.length > 0 && (
        <React.Fragment>
          <Header as='h4'>
            <Icon name='file' />
            File List
          </Header>
          <List bulleted>
            {record.record_files.map(filename => (
              <List.Item key={`file-${filename}`}>
                <List.Content>{filename}</List.Content>
              </List.Item>
            ))}
          </List>
        </React.Fragment>
      )}

      {record.validated_record_files &&
        record.validated_record_files.length > 0 && (
          <React.Fragment>
            <Header as='h4'>
              <Icon name='checkmark' />
              Validated Files
            </Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>File</Table.HeaderCell>
                  <Table.HeaderCell>Size</Table.HeaderCell>
                  <Table.HeaderCell>Origin</Table.HeaderCell>
                  <Table.HeaderCell>Path</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {record.validated_record_files.map((file, index) => (
                  <Table.Row key={`validated-${file.key}-${index}`}>
                    <Table.Cell>
                      <Icon name='file' />
                      {file.key}
                    </Table.Cell>
                    <Table.Cell>{(file.size / 1024).toFixed(2)} KB</Table.Cell>
                    <Table.Cell>{file.origin}</Table.Cell>
                    <Table.Cell className={styles.pathCell}>
                      {file.full_path}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </React.Fragment>
        )}
    </Segment>
  );
};
