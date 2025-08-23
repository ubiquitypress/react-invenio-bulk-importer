import React from 'react';
import { withState } from 'react-searchkit';
import { Label } from 'semantic-ui-react';
import { styles } from './results-count.styles';

const _ResultsCount = ({
  currentResultsState,
  currentQueryState
}: {
  currentQueryState: {
    size: number;
  };
  currentResultsState: {
    data: {
      total: number;
    };
  };
}) => {
  const totalResults = currentResultsState.data.total;
  const currentSize = currentQueryState.size;

  if (!totalResults) {
    return <Label>No results found</Label>;
  }

  if (!currentSize) {
    return null;
  }

  if (currentSize > totalResults) {
    return (
      <Label>
        Showing <strong>{totalResults}</strong> result(s) found
      </Label>
    );
  }

  return (
    <Label className={styles.container}>
      Showing <strong>{currentSize}</strong> of <strong>{totalResults}</strong>{' '}
      result(s) found
    </Label>
  );
};

export const ResultsCount = withState(_ResultsCount);
