import type { BaseProps, OverridableComponents } from '@/types';

export interface SearchBarRowProps extends BaseProps {
  appId?: string;
  overriddenComponents?: OverridableComponents;
  showFacets?: boolean;
  showImportModal?: boolean;
}
