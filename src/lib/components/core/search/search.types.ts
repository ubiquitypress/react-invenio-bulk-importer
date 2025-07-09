import type {
  BaseProps,
  OverridableComponents,
  SearchConfig
} from '@/lib/types';

export interface SearchProps extends BaseProps {
  config?: Partial<SearchConfig>;
  overriddenComponents?: OverridableComponents;
}
