import React from 'react';
import { BucketAggregation, withState } from 'react-searchkit';
import { useSearch } from '../provider';
import { useAggregations } from './hooks';
import { styles } from './search-facets.styles';
import type { SearchFacetsProps } from './search-facets.types';

const _SearchFacets: React.FC<SearchFacetsProps> = props => {
  const { config } = useSearch();
  const { availableAggregations, formatTitle } = useAggregations(props);

  if (!config.showFacets || availableAggregations.length === 0) {
    return null;
  }

  return (
    <aside className={styles.container} aria-label='Search Facets'>
      {availableAggregations.map(aggKey => (
        <BucketAggregation
          key={aggKey}
          title={formatTitle(aggKey)}
          agg={{
            field: aggKey,
            aggName: aggKey
          }}
        />
      ))}
    </aside>
  );
};

export const SearchFacets = withState(_SearchFacets);
