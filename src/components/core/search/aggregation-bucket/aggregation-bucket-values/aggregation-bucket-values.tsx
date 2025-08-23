import React from 'react';
import { Checkbox, Label } from 'semantic-ui-react';
import { styles } from './aggregation-bucket-values.styles';
import type { AggregationBucketValuesProps } from './aggregation-bucket-values.types';

export const AggregationBucketValues: React.FC<
  AggregationBucketValuesProps
> = ({ bucket, label, onFilterClicked, isSelected, childAggCmps }) => {
  return (
    <div className={styles.checkboxContainer}>
      <Checkbox
        checked={isSelected}
        onChange={() => onFilterClicked(bucket.key)}
        label={label}
      />
      <Label circular size='mini'>
        {bucket.doc_count}
      </Label>
      {childAggCmps && childAggCmps.length > 0 && (
        <div className={styles.childAggContainer}>{childAggCmps}</div>
      )}
    </div>
  );
};
