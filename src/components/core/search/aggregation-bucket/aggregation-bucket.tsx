import React from 'react';
import { Header } from 'semantic-ui-react';
import { styles } from './aggregation-bucket.styles';
import type { AggregationBucketProps } from './aggregation-bucket.types';

export const AggregationBucket: React.FC<AggregationBucketProps> = ({
  title,
  containerCmp
}) => {
  return (
    <div className={styles.container}>
      <Header as='h2' className={styles.header}>
        {title}
      </Header>
      <div>{containerCmp}</div>
    </div>
  );
};
