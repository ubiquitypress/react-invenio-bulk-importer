import type { SearchApiConfig } from '@/types';
import { InvenioSearchApi } from 'react-searchkit';

/**
 * Creates a new InvenioSearchApi instance with the provided configuration.
 *
 * @param config - The configuration object for the search API
 * @returns A new InvenioSearchApi instance
 */
export const createSearchApi = (config: SearchApiConfig): unknown => {
  return new InvenioSearchApi(config);
};

/**
 * Creates a configuration object for the search API with default settings.
 *
 * @param url - The base URL for the search API endpoint
 * @param headers - Additional HTTP headers to include in requests. Defaults to an empty object
 * @param withCredentials - Whether to include credentials (cookies, authorization headers) in cross-origin requests. Defaults to true
 * @returns A SearchApiConfig object containing axios configuration with the specified parameters
 */
export const createSearchApiConfig = (
  url: string,
  headers: Record<string, string> = {},
  withCredentials = true
): SearchApiConfig => {
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
};
