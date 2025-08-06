/**
 * Capitalizes the first letter of a given string.
 *
 * @param string - The input string to capitalize
 * @returns The string with the first letter capitalized, or an empty string if input is null/undefined
 */
export const capitalizeFirstLetter = (string: string): string => {
  return string?.charAt(0).toUpperCase() + string?.slice(1) || '';
};
