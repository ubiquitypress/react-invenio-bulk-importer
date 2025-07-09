import React from 'react';
import { OverridableContext } from 'react-overridable';
import {
  EmptyResults,
  InvenioSearchApi,
  Pagination,
  ReactSearchKit,
  ResultsList,
  ResultsLoader,
  SearchBar
} from 'react-searchkit';
import { ResultItem } from './result-item';
import type { SearchProps } from './search.types';

const appName = 'invenio-bulk-importer-react';

const searchApi = new InvenioSearchApi({
  axios: {
    url: 'https://inveniordm.web.cern.ch/api/records',
    headers: { Accept: 'application/vnd.inveniordm.v1+json' }
  }
});

const overriddenComponents = {
  [`${appName}.ResultsList.item`]: ResultItem
};

export const Search: React.FC<SearchProps> = () => {
  return (
    <OverridableContext.Provider value={overriddenComponents}>
      <ReactSearchKit
        appName={appName}
        urlHandlerApi={{ enabled: false }}
        searchApi={searchApi}
        initialQueryState={{ size: 5, page: 1 }}
      >
        <div>
          <SearchBar
            autofocus
            actionProps={{
              icon: 'search',
              content: 'Search',
              className: 'search',
              'aria-label': 'Search'
            }}
            placeholder={'Search records...'}
          />
          <ResultsLoader>
            <EmptyResults />
            <ResultsList />
          </ResultsLoader>
          <div>
            <Pagination />
          </div>
        </div>
      </ReactSearchKit>
    </OverridableContext.Provider>
  );
};
