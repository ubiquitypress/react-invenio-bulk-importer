import React from 'react';
import Overridable from 'react-overridable';
import { SearchBar } from 'react-searchkit';
import { ImportModal } from '../../import-modal';
import { useSearch } from '../provider';
import { styles } from './search-bar-row.styles';
import type { SearchBarRowProps } from './search-bar-row.types';

export const SearchBarRow: React.FC<SearchBarRowProps> = ({
  appId = 'search'
}) => {
  const { showImportModal } = useSearch().config;

  return (
    <Overridable id={`${appId}.SearchBarRow`}>
      <section
        className={styles.searchBarRow}
        aria-label='Records search and filters'
      >
        <div className={styles.search}>
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
          <div className={styles.facets}>
            <ImportModal />
          </div>
        )}
      </section>
    </Overridable>
  );
};
