import React from 'react';
import { SortBy } from 'react-searchkit';
import { ResultsCount } from '../results-count';
import { styles } from './results-toolbar.styles';

export const ResultsToolbar = () => {
  return (
    <div className={styles.container}>
      <ResultsCount />
      <div className={styles.sortByContainer}>
        <label htmlFor={'sort-by'}>Sort by</label>
        <SortBy
          id={'sort-by'}
          values={[
            { text: 'Newest', value: 'newest' },
            { text: 'Oldest', value: 'oldest' }
          ]}
        />
      </div>
    </div>
  );
};
