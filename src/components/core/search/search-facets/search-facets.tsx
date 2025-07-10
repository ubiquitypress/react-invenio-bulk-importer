import React from 'react';
import { withState } from 'react-searchkit';
import { Menu } from 'semantic-ui-react';

interface StatusOption {
  key: string;
  label: string;
  value: string | null;
}

interface SearchFacetsProps {
  currentQueryState: {
    filters?: [string, string][];
    page?: number;
  };
  updateQueryState: (query: {
    filters: [string, string][];
    page: number;
  }) => void;
}

const _SearchFacets: React.FC<SearchFacetsProps> = ({
  currentQueryState,
  updateQueryState
}) => {
  const statusOptions: StatusOption[] = [
    { key: 'all', label: 'All', value: null },
    { key: 'pending', label: 'Pending', value: 'pending' },
    { key: 'success', label: 'Success', value: 'success' },
    { key: 'failed', label: 'Failed', value: 'failed' }
  ];

  const currentStatusFilter = currentQueryState.filters?.find(
    (filter: [string, string]) => filter[0] === 'status'
  );

  const handleStatusChange = (status: string | null): void => {
    const newFilters =
      currentQueryState.filters?.filter(
        (filter: [string, string]) => filter[0] !== 'status'
      ) || [];

    if (status) {
      newFilters.push(['status', status]);
    }

    updateQueryState({
      ...currentQueryState,
      filters: newFilters,
      page: 1
    });
  };

  return (
    <Menu activeIndex={0} compact size='tiny'>
      {statusOptions.map(({ key, label, value }: StatusOption) => (
        <Menu.Item
          key={key}
          name={key}
          active={
            currentStatusFilter?.[1] === value ||
            (value === null && !currentStatusFilter)
          }
          onClick={() => handleStatusChange(value)}
        >
          {label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export const SearchFacets = withState(_SearchFacets);
