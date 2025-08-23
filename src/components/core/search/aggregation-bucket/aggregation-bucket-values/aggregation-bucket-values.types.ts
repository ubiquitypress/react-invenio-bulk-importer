import type { Bucket } from '../aggregation-bucket.types';

export interface AggregationBucketValuesProps {
  bucket: Bucket;
  label: string;
  onFilterClicked: (key: string) => void;
  isSelected: boolean;
  childAggCmps?: React.ReactNode[];
  getChildAggCmps?: (bucket: Bucket) => React.ReactNode[];
}
