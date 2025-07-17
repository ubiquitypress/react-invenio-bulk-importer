import type { SearchConfig } from '@/types';
import React, { useCallback } from 'react';
import { withState } from 'react-searchkit';

export interface SearchContextProps {
  config: SearchConfig;
  refreshSearch: () => void;
}

export const SearchContext = React.createContext<SearchContextProps | null>(
  null
);

const SearchProviderComponent: React.FC<{
  config: SearchConfig;
  children: React.ReactNode;
  updateQueryState: (queryState: Record<string, unknown>) => void;
  currentQueryState: Record<string, unknown>;
}> = ({ config, children, updateQueryState, currentQueryState }) => {
  /**
   * Refreshes the search results by updating the query state.
   * This function is used to trigger a new search with the current query string.
   */
  const refreshSearch = useCallback(() => {
    updateQueryState({
      ...currentQueryState,
      queryString: currentQueryState.queryString
    });
  }, [updateQueryState, currentQueryState]);

  return (
    <SearchContext.Provider value={{ config, refreshSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const SearchProvider = withState(SearchProviderComponent);

export const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchConfig must be used within a SearchProvider');
  }
  return context;
};
