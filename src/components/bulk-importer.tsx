import type React from 'react';
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
import {
  Item,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemMeta
} from 'semantic-ui-react';

const appName = 'InvenioBulkImporter';

// Custom result item component
const CustomResultItem = ({ result, index }) => {
  return (
    <Item
      key={index}
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '1em' }}
    >
      <ItemHeader as='a' href={`/works/${result.id}`}>
        {result.metadata?.title || result.title || 'No title'}
      </ItemHeader>
      <ItemMeta as='a'>
        {result.metadata?.creators?.map(c => c.person_or_org.name).join(', ')}
      </ItemMeta>
      <ItemDescription>
        {result.metadata?.description || result.description || 'No description'}
      </ItemDescription>
      <ItemExtra>Created: {result.created}</ItemExtra>
    </Item>
  );
};

// Try different possible override keys
const overriddenComponents = {
  [`${appName}.ResultsList.item`]: CustomResultItem
};

export interface BulkImporterProps {
  className?: string;
}

const searchApi = new InvenioSearchApi({
  axios: {
    url: 'https://inveniordm.web.cern.ch/api/records',
    headers: { Accept: 'application/vnd.inveniordm.v1+json' }
  }
});

export const BulkImporter: React.FC<BulkImporterProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Bulk Importer</h2>
      <p>Invenio-compatible bulk import component</p>

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
              <ItemGroup divided>
                <ResultsList />
              </ItemGroup>
            </ResultsLoader>
            <div>
              <Pagination />
            </div>
          </div>
        </ReactSearchKit>
      </OverridableContext.Provider>
    </div>
  );
};
