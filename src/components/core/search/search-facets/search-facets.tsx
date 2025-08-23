import React from 'react';
import { BucketAggregation } from 'react-searchkit';
import { styles } from './search-facets.styles';

export const SearchFacets = () => {
  return (
    <aside className={styles.container}>
      <BucketAggregation
        title='Status'
        agg={{
          field: 'status',
          aggName: 'status'
        }}
      />

      <BucketAggregation
        title='Type'
        agg={{
          field: 'record_type',
          aggName: 'record_type'
        }}
      />
    </aside>
  );
};
