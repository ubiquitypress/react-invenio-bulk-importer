import React from 'react';
import { Header } from 'semantic-ui-react';
import { Search } from '../search';
import type { BulkImporterProps } from './bulk-importer.types';

// Custom result item component

// Try different possible override keys

export const BulkImporter: React.FC<BulkImporterProps> = ({ className }) => {
  return (
    <div className={className}>
      <Header>Bulk Importer</Header>
      <p>Invenio-compatible bulk import component</p>

      <Search />
    </div>
  );
};
