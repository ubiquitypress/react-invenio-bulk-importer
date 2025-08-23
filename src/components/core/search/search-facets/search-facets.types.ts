export interface StatusOption {
  key: string;
  label: string;
  value: string | null;
}

export type FilterKey = 'status';
export type Filter = [FilterKey, string];

export interface SearchFacetsProps {
  currentQueryState: {
    filters?: Filter[];
    page?: number;
  };
  updateQueryState: (query: { filters: Filter[]; page: number }) => void;
}
