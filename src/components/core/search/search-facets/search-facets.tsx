import React, { useCallback } from 'react';
import { withState } from 'react-searchkit';
import { Checkbox, Header } from 'semantic-ui-react';
import { useSearch } from '../provider';
import { FILTER_KEYS, STATUS_OPTIONS } from './search-facets.consts';
import { styles } from './search-facets.styles';
import type {
  Filter,
  SearchFacetsProps,
  StatusOption
} from './search-facets.types';

const _SearchFacets: React.FC<SearchFacetsProps> = ({
  currentQueryState,
  updateQueryState
}) => {
  const { config } = useSearch();

  const currentStatusFilters =
    currentQueryState.filters
      ?.filter((filter: Filter) => filter[0] === FILTER_KEYS.STATUS)
      .map(filter => filter[1]) || [];

  const handleStatusChange = useCallback(
    (status: string, checked: boolean): void => {
      const currentStatusValues =
        currentQueryState.filters
          ?.filter((filter: Filter) => filter[0] === FILTER_KEYS.STATUS)
          .map(filter => filter[1]) || [];

      const otherFilters =
        currentQueryState.filters?.filter(
          (filter: Filter) => filter[0] !== FILTER_KEYS.STATUS
        ) || [];

      let newStatusFilters: Filter[] = [];

      if (checked) {
        const currentStatuses = new Set(currentStatusValues);
        currentStatuses.add(status);
        newStatusFilters = Array.from(currentStatuses).map(
          s => [FILTER_KEYS.STATUS, s] as Filter
        );
      } else {
        newStatusFilters = currentStatusValues
          .filter(s => s !== status)
          .map(s => [FILTER_KEYS.STATUS, s] as Filter);
      }

      updateQueryState({
        ...currentQueryState,
        filters: [...otherFilters, ...newStatusFilters],
        page: 1
      });
    },
    [currentQueryState, updateQueryState]
  );

  if (!config.showFacets) {
    return null;
  }

  return (
    <aside className={styles.container}>
      <Header as='h2' className={styles.header}>
        Task Status
      </Header>
      {STATUS_OPTIONS.map(({ key, label, value }: StatusOption) => {
        if (!value) {
          return null;
        }

        return (
          <div key={key}>
            <Checkbox
              label={label}
              checked={currentStatusFilters.includes(value)}
              onChange={(_, data) =>
                handleStatusChange(value, data.checked ?? false)
              }
            />
          </div>
        );
      })}
    </aside>
  );
};

export const SearchFacets = withState(_SearchFacets);
