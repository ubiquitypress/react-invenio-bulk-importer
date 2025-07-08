import React from 'react';
import {
  InvenioSearchApi,
  ReactSearchKit,
  ResultsList,
  SearchBar,
} from "react-searchkit";


export interface BulkImporterProps {
  className?: string;
  onImport?: (data: any) => void;
}

  const searchApi = new InvenioSearchApi({
    axios: {
      url: 'https://zenodo.org/api/records',
      headers: { Accept: "application/vnd.inveniordm.v1+json" },
    },
  });

export const BulkImporter: React.FC<BulkImporterProps> = ({
  className,
  onImport,
}) => {
  return (
    <div className={className}>
      <h2>Bulk Importer</h2>
      <p>Invenio-compatible bulk import component</p>

      <ReactSearchKit searchApi={searchApi}>
        <>
        <SearchBar
          autofocus
          actionProps={{
            "icon": "search",
            "content": "Search",
            "className": "search",
            "aria-label": "Search",
          }}
          placeholder={"Search records..."}
        />
        <ResultsList />
        </>
      </ReactSearchKit>
    </div>
  );
};