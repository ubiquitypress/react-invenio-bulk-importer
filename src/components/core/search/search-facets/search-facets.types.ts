export interface StatusOption {
  key: string;
  label: string;
  value: string | null;
}

export interface SearchFacetsProps {
  currentQueryState: {
    filters?: [string, string][];
    page?: number;
  };
  updateQueryState: (query: {
    filters: [string, string][];
    page: number;
  }) => void;
}
