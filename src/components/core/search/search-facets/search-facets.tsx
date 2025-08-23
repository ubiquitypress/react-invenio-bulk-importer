import React from 'react';
import { withState } from 'react-searchkit';
import { Checkbox, Header } from 'semantic-ui-react';
import { useSearch } from '../provider';
import { useStatusFilters } from './hooks';
import { STATUS_OPTIONS } from './search-facets.consts';
import { styles } from './search-facets.styles';
import type { SearchFacetsProps, StatusOption } from './search-facets.types';

const _SearchFacets: React.FC<SearchFacetsProps> = props => {
  const { config } = useSearch();
  const { currentStatusFilters, handleStatusChange } = useStatusFilters(props);

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
          <div key={key} className={styles.checkboxContainer}>
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
