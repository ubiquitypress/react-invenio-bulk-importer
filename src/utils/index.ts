import type { SearchApiConfig } from '@/types';
import { InvenioSearchApi } from 'react-searchkit';

export function createSearchApi(config: SearchApiConfig): unknown {
  return new InvenioSearchApi(config);
}

export function createSearchApiConfig(
  url: string,
  headers: Record<string, string> = {},
  withCredentials = true
): SearchApiConfig {
  return {
    axios: {
      url,
      headers: {
        Accept: 'application/vnd.inveniordm.v1+json',
        ...headers
      },
      withCredentials
    }
  };
}
