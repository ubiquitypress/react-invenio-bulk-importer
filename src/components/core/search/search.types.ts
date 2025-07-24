import type { OverridableComponents, SearchConfig } from '@/types';

export interface SearchProps {
  config?: Partial<SearchConfig>;
  overriddenComponents?: OverridableComponents;
}
