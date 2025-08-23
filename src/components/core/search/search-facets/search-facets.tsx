import React from 'react';
import { withState } from 'react-searchkit';
import { Checkbox, Header } from 'semantic-ui-react';
import { useSearch } from '../provider';
import { STATUS_OPTIONS } from './search-facets.consts';
import { styles } from './search-facets.styles';
import type { SearchFacetsProps, StatusOption } from './search-facets.types';

const _SearchFacets: React.FC<SearchFacetsProps> = ({
  currentQueryState,
  updateQueryState
}) => {
  const { config } = useSearch();

  if (!config.showFacets) {
    return null;
  }

  const currentStatusFilters =
    currentQueryState.filters
      ?.filter((filter: [string, string]) => filter[0] === 'status')
      .map(filter => filter[1]) || [];

  const handleStatusChange = (status: string, checked: boolean): void => {
    const otherFilters =
      currentQueryState.filters?.filter(
        (filter: [string, string]) => filter[0] !== 'status'
      ) || [];

    let newStatusFilters: [string, string][] = [];

    if (checked) {
      const currentStatuses = new Set(currentStatusFilters);
      currentStatuses.add(status);
      newStatusFilters = Array.from(currentStatuses).map(s => ['status', s]);
    } else {
      newStatusFilters = currentStatusFilters
        .filter(s => s !== status)
        .map(s => ['status', s]);
    }

    updateQueryState({
      ...currentQueryState,
      filters: [...otherFilters, ...newStatusFilters],
      page: 1
    });
  };

  return (
    <aside className={styles.container}>
      <Header as='h2' style={{ fontSize: '1.2rem' }}>
        Status
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
