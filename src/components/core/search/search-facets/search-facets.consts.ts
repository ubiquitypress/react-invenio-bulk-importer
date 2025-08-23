import type { StatusOption } from './search-facets.types';

export const STATUS_OPTIONS: StatusOption[] = [
  { key: 'pending', label: 'Pending', value: 'pending' },
  { key: 'success', label: 'Success', value: 'success' },
  { key: 'failed', label: 'Failed', value: 'failed' }
];
