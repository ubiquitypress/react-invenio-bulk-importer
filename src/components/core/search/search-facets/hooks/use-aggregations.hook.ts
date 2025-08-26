import { useCallback, useMemo } from 'react';
import type { SearchFacetsProps } from '../search-facets.types';

export const useAggregations = ({ currentResultsState }: SearchFacetsProps) => {
  const aggregations = currentResultsState?.data?.aggregations || {};

  /**
   * Formats an aggregation key into a human-readable title by replacing underscores
   * with spaces and capitalizing the first letter of each word.
   *
   * @param aggKey - The aggregation key string to format
   * @returns The formatted title string with proper capitalization and spacing
   *
   * @example
   * ```typescript
   * formatTitle("user_profile_settings") // Returns "User Profile Settings"
   * formatTitle("document_type") // Returns "Document Type"
   * ```
   */
  const formatTitle = useCallback((aggKey: string): string => {
    return aggKey
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (l: string) => l.toUpperCase());
  }, []);

  /**
   * Computes a list of available aggregation keys that have non-empty buckets.
   *
   * This memoized value filters the aggregation keys from the current results state,
   * returning only those keys whose corresponding buckets array is non-empty.
   *
   * @returns An array of aggregation keys with non-empty buckets
   */
  const availableAggregations = useMemo(
    () =>
      Object.keys(aggregations).filter(aggKey => {
        const buckets = aggregations[aggKey]?.buckets || [];
        return buckets.length > 0;
      }),
    [aggregations]
  );

  return { availableAggregations, formatTitle };
};
