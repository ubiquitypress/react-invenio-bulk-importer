export interface SearchApiConfig {
  axios: {
    headers?: Record<string, string>;
    url?: string;
    withCredentials?: boolean;
  };
  invenio?: {
    requestSerializer: string;
  };
}

export interface SortOption {
  sortBy: string;
  text: string;
}

export interface DefaultSortingOption {
  sortBy: string;
}

export interface InitialQueryState {
  filters: unknown[];
  hiddenParams: unknown | null;
  layout: string;
  page: number;
  size: number;
  sortBy: string;
}

export interface LayoutOptions {
  gridView: boolean;
  listView: boolean;
}

export interface ResultsPerPageOption {
  text: string;
  value: number;
}

export interface PaginationOptions {
  defaultValue: number;
  maxTotalResults: number;
  resultsPerPage: ResultsPerPageOption[];
}

export interface SearchConfig {
  aggs: unknown[];
  appId: string;
  defaultSortingOnEmptyQueryString: DefaultSortingOption[];
  initialQueryState: InitialQueryState;
  layoutOptions: LayoutOptions;
  paginationOptions: PaginationOptions;
  searchApi: SearchApiConfig;
  sortOptions: SortOption[];
  sortOrderDisabled: boolean;
}
