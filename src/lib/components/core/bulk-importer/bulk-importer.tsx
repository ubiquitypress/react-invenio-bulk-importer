import React from 'react';
import { Header } from 'semantic-ui-react';
import { Search } from '../search';
import { styles } from './bulk-importer.styles';
import type { BulkImporterProps } from './bulk-importer.types';

export const BulkImporter: React.FC<BulkImporterProps> = () => {
  return (
    <div className={styles.bulkImporter}>
      <Header as='h1'>Bulk Importer</Header>
      <p>Invenio-compatible bulk import component</p>
      <Search />
    </div>
  );
};
