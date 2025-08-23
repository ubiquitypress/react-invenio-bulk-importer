/**
 * Represents an individual bucket in an aggregation.
 */
export interface Bucket {
  key: string;
  doc_count: number;
  label: string;
  is_selected: boolean;
}

/**
 * Represents a filter value in the search.
 */
export interface FilterValue {
  field: string;
  value: string;
  label?: string;
}

/**
 * Represents the query filters applied to the search.
 */
export interface QueryFilters {
  [fieldName: string]: FilterValue[] | FilterValue;
}

/**
 * Represents the configuration for an aggregation.
 */
export interface AggregationConfig {
  field: string;
  aggName: string;
  childAgg?: AggregationConfig;
}

export interface AggregationBucketProps {
  title: string;
  containerCmp: React.ReactNode;
  agg: AggregationConfig;
  updateQueryFilters: (filters: QueryFilters) => void;
}
