import type { InvenioImporterRecord } from '@/types';
import React from 'react';
import { Table } from 'semantic-ui-react';
import { styles } from './source-data-tab.styles';

interface SourceDataTabProps {
  record: InvenioImporterRecord;
}

export const SourceDataTab: React.FC<SourceDataTabProps> = ({ record }) => {
  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Field</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.entries(record.src_data)
          .filter(([_, value]) => value && value.trim() !== '')
          .map(([key, value]) => (
            <Table.Row key={key}>
              <Table.Cell>
                <strong>{key}</strong>
              </Table.Cell>
              <Table.Cell className={styles.valueCell}>
                {value}
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};
