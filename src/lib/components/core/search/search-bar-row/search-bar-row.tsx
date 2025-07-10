import React from 'react';
import { SearchBar } from 'react-searchkit';
import { ImportModal } from '../../import-modal';
import { SearchFacets } from '../search-facets';
import { styles } from './search-bar-row.styles';

export const SearchBarRow = () => {
  return (
    <section
      className={styles.searchBarRow}
      aria-label='Records search and filters'
    >
      <div className={styles.facets}>
        <SearchFacets />
      </div>

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
          placeholder='Search records...'
          aria-describedby='search-instructions'
        />
        <span id='search-instructions' className={styles.visuallyHidden}>
          Type keywords to search through records. Press Enter to submit.
        </span>
      </div>

      <div className={styles.import}>
        <ImportModal />
      </div>
    </section>
  );
};
