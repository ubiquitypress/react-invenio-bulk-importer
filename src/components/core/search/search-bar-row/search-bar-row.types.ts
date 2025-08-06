import type { OverridableComponents } from '@/types';

export interface SearchBarRowProps {
  appId?: string;
  overriddenComponents?: OverridableComponents;
  showFacets?: boolean;
  showImportModal?: boolean;
}
