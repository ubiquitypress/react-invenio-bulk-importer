import React from 'react';
import { SortBy } from 'react-searchkit';
import { ResultsCount } from '../results-count';
import { SORT_BY_OPTIONS } from './results-toolbar.consts';
import { styles } from './results-toolbar.styles';

export const ResultsToolbar = () => {
  return (
    <div className={styles.container}>
      <ResultsCount />
      <div className={styles.sortByContainer}>
        <SortBy values={SORT_BY_OPTIONS} />
      </div>
    </div>
  );
};
