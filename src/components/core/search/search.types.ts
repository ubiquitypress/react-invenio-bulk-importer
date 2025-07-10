import type { BaseProps, OverridableComponents, SearchConfig } from '@/types';

export interface SearchProps extends BaseProps {
  config?: Partial<SearchConfig>;
  overriddenComponents?: OverridableComponents;
}
