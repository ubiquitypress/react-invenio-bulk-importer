import React from 'react';
import { OverridableContext } from 'react-overridable';
// @ts-ignore - react-searchkit doesn't have types
import {
  ActiveFilters,
  Count,
  EmptyResults,
  InvenioSearchApi,
  Pagination,
  ReactSearchKit,
  ResultsList,
  ResultsLoader,
  SearchBar,
  ResultsPerPage,
  Sort
} from 'react-searchkit';
import { ResultItem } from './result-item';
import { defaultSearchConfig } from './search.config';
import type { SearchProps } from './search.types';
import { Grid } from 'semantic-ui-react';

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

          <Grid>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column width={8}>
                <Count label={(cmp: string) => <p>{cmp} result(s) found</p>} />
              </Grid.Column>
              <Grid.Column width={8} textAlign='right'>
                <span>Sort by: </span>
                <Sort values={config.sortOptions} />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <ResultsLoader>
            <ActiveFilters />
            <EmptyResults />
            <ResultsList />
          </ResultsLoader>

          <Grid>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column width={8} textAlign='left'>
                <Pagination />
              </Grid.Column>
              <Grid.Column width={8} textAlign='right'>
                <ResultsPerPage
                  values={config.paginationOptions.resultsPerPage}
                  label={(cmp: string) => <p>{cmp} results per page</p>}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </ReactSearchKit>
    </OverridableContext.Provider>
  );
};
