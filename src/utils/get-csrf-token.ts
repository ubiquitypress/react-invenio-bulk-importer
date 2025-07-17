import Cookies from 'js-cookie';

/**
 * Retrieves the CSRF token from browser cookies.
 *
 * This function looks for a cookie named 'csrftoken' and returns its value.
 * CSRF tokens are commonly used to prevent Cross-Site Request Forgery attacks
 * by ensuring that requests originate from the intended source.
 *
 * @returns The CSRF token string if found in cookies, otherwise null
 *
 */
export const getCsrfToken = (): string | null => {
  return Cookies.get('csrftoken') || null;
};
