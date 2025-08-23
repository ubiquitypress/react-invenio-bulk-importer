/**
 * Represents an individual bucket in an aggregation.
 * This is the base bucket data from the API.
 */
export interface AggregationBucket {
  key: string;
  doc_count: number;
}

/**
 * Extended bucket with UI state information.
 * Used by aggregation components for display and interaction.
 */
export interface Bucket extends AggregationBucket {
  label: string;
  is_selected: boolean;
}

/**
 * Represents aggregation data structure from the API.
 */
export interface AggregationData {
  buckets: AggregationBucket[];
}

/**
 * Map of aggregation results from the API.
 */
export interface Aggregations {
  [key: string]: AggregationData;
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

/**
 * Search results data structure from the API.
 */
export interface SearchResultsData {
  aggregations?: Aggregations;
  hits?: unknown[];
  total?: number;
}
