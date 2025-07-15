import type { SearchConfig } from '@/types';
import React from 'react';
import { OverridableContext } from 'react-overridable';
import {
  EmptyResults,
  InvenioSearchApi,
  ReactSearchKit,
  ResultsList,
  ResultsLoader
} from 'react-searchkit';
import { SearchProvider } from './provider';
import { ResultItem } from './result-item';
import { ResultsTable } from './results-table';
import { defaultSearchConfig } from './search.config';
import type { SearchProps } from './search.types';
import { SearchBarRow } from './search-bar-row';
import { SearchFacets } from './search-facets';
import { SearchFooter } from './search-footer';

export const Search: React.FC<SearchProps> = ({
  config: userConfig = {},
  overriddenComponents: userOverrides = {}
}) => {
  // Deep merge configs
  const config: SearchConfig = {
    ...defaultSearchConfig,
    ...userConfig,
    initialQueryState: {
      ...defaultSearchConfig.initialQueryState,
      ...userConfig.initialQueryState
    },
    layoutOptions: {
      ...defaultSearchConfig.layoutOptions,
      ...userConfig.layoutOptions
    },
    paginationOptions: {
      ...defaultSearchConfig.paginationOptions,
      ...userConfig.paginationOptions,
      resultsPerPage:
        userConfig.paginationOptions?.resultsPerPage ||
        defaultSearchConfig.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...defaultSearchConfig.searchApi,
      ...userConfig.searchApi,
      axios: {
        ...defaultSearchConfig.searchApi.axios,
        ...userConfig.searchApi?.axios,
        headers: {
          ...defaultSearchConfig.searchApi.axios.headers,
          ...userConfig.searchApi?.axios?.headers
        }
      },
      invenio: {
        ...defaultSearchConfig.searchApi.invenio,
        ...userConfig.searchApi?.invenio
      }
    }
  };

  const searchApi = new InvenioSearchApi(config.searchApi);

  const overriddenComponents = {
    [`${config.appId}.ResultsList.item`]: ResultItem,
    [`${config.appId}.ResultsList.container`]: ResultsTable,
    [`${config.appId}.SearchFacets`]: SearchFacets,
    ...userOverrides
  };

  return (
    <OverridableContext.Provider value={overriddenComponents}>
      <ReactSearchKit
        appName={config.appId}
        searchApi={searchApi}
        initialQueryState={config.initialQueryState}
      >
        <SearchProvider config={config}>
          <SearchBarRow />
          <ResultsLoader>
            <EmptyResults />
            <ResultsList />
          </ResultsLoader>

          <SearchFooter />
        </SearchProvider>
      </ReactSearchKit>
    </OverridableContext.Provider>
  );
};
