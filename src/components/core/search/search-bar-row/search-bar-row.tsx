import React from 'react';
import Overridable from 'react-overridable';
import { SearchBar } from 'react-searchkit';
import { ImportModal } from '../../import-modal';
import { useSearch } from '../provider';
import { SearchFacets } from '../search-facets';
import type { SearchBarRowProps } from './search-bar-row.types';

export const SearchBarRow: React.FC<SearchBarRowProps> = ({
  appId = 'search'
}) => {
  const { showFacets, showImportModal } = useSearch().config;

  return (
    <Overridable id={`${appId}.SearchBarRow`}>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '1rem',
          paddingBlock: '0.5rem',
          minBlockSize: '3rem'
        }}
        aria-label='Records search and filters'
      >
        {showFacets && (
          <div style={{ flex: '0 0 auto' }}>
            <SearchFacets />
          </div>
        )}

        <div style={{ flex: '1 1 auto', minInlineSize: '15rem' }}>
          <SearchBar
            autofocus
            actionProps={{
              icon: 'search',
              content: 'Search',
              className: 'search',
              'aria-label': 'Submit search',
              type: 'submit'
            }}
            placeholder='Search…'
            aria-describedby='search-instructions'
          />
        </div>

        {showImportModal && (
          <div style={{ flex: '0 0 auto' }}>
            <ImportModal />
          </div>
        )}
      </section>
    </Overridable>
  );
};
