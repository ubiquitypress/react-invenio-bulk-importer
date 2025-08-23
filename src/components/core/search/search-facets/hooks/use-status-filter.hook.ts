import { useCallback, useMemo } from 'react';
import { FILTER_KEYS } from '../search-facets.consts';
import type { Filter, SearchFacetsProps } from '../search-facets.types';

/**
 * Custom hook for managing status filters in search functionality.
 *
 * This hook provides utilities to handle status filter state and operations,
 * including retrieving current status filters and updating them based on user interactions.
 *
 * @param props - The search facets properties
 *
 * @returns An object containing:
 * - `currentStatusFilters`: Array of currently applied status filter values
 * - `handleStatusChange`: Callback function to handle status filter changes (add/remove)
 *
 * @example
 * ```typescript
 * const { currentStatusFilters, handleStatusChange } = useStatusFilters({
 *   currentQueryState,
 *   updateQueryState
 * });
 *
 * // Handle checkbox change
 * handleStatusChange('published', true); // Add 'published' status filter
 * handleStatusChange('draft', false); // Remove 'draft' status filter
 * ```
 */
export const useStatusFilters = ({
  currentQueryState,
  updateQueryState
}: SearchFacetsProps) => {
  /**
   * Memoized array of current status filter values extracted from the query state.
   *
   * Filters the current query state filters to find only those with the STATUS filter key,
   * then maps them to extract just the filter values (second element of each filter tuple).
   * Returns an empty array if no status filters are found.
   *
   * @returns An array of status filter values currently applied to the search query
   */
  const currentStatusFilters = useMemo(
    () =>
      currentQueryState.filters
        ?.filter((filter: Filter) => filter[0] === FILTER_KEYS.STATUS)
        .map(filter => filter[1]) || [],
    [currentQueryState.filters]
  );

  /**
   * Handles the change of status filter selection.
   *
   * @param status - The status value to add or remove from the filter
   * @param checked - Whether the status should be added (true) or removed (false) from the filter
   *
   * @remarks
   * This function manages status filters by:
   * - Preserving all non-status filters from the current query state
   * - Adding or removing the specified status from the current status filters
   * - Updating the query state with the new filter configuration
   * - Resetting the page to 1 when filters change
   */
  const handleStatusChange = useCallback(
    (status: string, checked: boolean) => {
      const otherFilters =
        currentQueryState.filters?.filter(
          (filter: Filter) => filter[0] !== FILTER_KEYS.STATUS
        ) || [];

      const currentStatuses = new Set(currentStatusFilters);

      if (checked) {
        currentStatuses.add(status);
      } else {
        currentStatuses.delete(status);
      }

      const newStatusFilters = Array.from(currentStatuses).map(
        s => [FILTER_KEYS.STATUS, s] as Filter
      );

      updateQueryState({
        ...currentQueryState,
        filters: [...otherFilters, ...newStatusFilters],
        page: 1
      });
    },
    [currentQueryState, updateQueryState, currentStatusFilters]
  );

  return { currentStatusFilters, handleStatusChange };
};
