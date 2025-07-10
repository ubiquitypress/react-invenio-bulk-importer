import type { SearchConfig } from '@/types';
import React from 'react';

export interface SearchContextProps {
  config: SearchConfig;
}

export const SearchContext = React.createContext<SearchContextProps | null>(
  null
);

export const SearchProvider: React.FC<{
  config: SearchConfig;
  children: React.ReactNode;
}> = ({ config, children }) => {
  return (
    <SearchContext.Provider value={{ config }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchConfig must be used within a SearchProvider');
  }
  return context;
};
