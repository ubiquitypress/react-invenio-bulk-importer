import React from 'react';
import { OverridableContext } from 'react-overridable';
// @ts-ignore - react-searchkit doesn't have types
import {
  EmptyResults,
  InvenioSearchApi,
  Pagination,
  ReactSearchKit,
  ResultsList,
  ResultsLoader,
  SearchBar,
  Count,
  Sort,
  ActiveFilters
} from 'react-searchkit';
import { ResultItem } from './result-item';
import type { SearchProps } from './search.types';
import { defaultSearchConfig } from './search.config';

export const Search: React.FC<SearchProps> = ({
  config: userConfig = {},
  overriddenComponents: userOverrides = {}
}) => {
  // Deep merge configs
  const config = {
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
    ...userOverrides
  };

  return (
    <OverridableContext.Provider value={overriddenComponents}>
      <ReactSearchKit
        appName={config.appId}
        searchApi={searchApi}
        initialQueryState={config.initialQueryState}
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
            placeholder='Search records...'
          />
          <ResultsLoader>
            <Count label={(cmp: string) => <p>{cmp} results found</p>} />
            <Sort values={config.sortOptions} />
            <ActiveFilters />
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
