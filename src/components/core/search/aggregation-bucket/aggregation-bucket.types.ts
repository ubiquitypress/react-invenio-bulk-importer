import type { AggregationConfig, QueryFilters } from '@/types';

export interface AggregationBucketProps {
  title: string;
  containerCmp: React.ReactNode;
  agg: AggregationConfig;
  updateQueryFilters: (filters: QueryFilters) => void;
}
