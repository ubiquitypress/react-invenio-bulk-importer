/**
 * Normalizes task field values for display in the UI.
 *
 * @param value - The raw task value to render.
 * @param formatter - Optional formatter for string-like values.
 * @returns A human-readable string suitable for UI display.
 */
export const formatDetailValue = (
  value?: string | number | boolean | null,
  formatter?: (value: string) => string
) => {
  if (typeof value === 'boolean') {
    return value ? 'Enabled' : 'Disabled';
  }

  if (value === undefined || value === null || value === '') {
    return 'Not available';
  }

  return formatter ? formatter(String(value)) : String(value);
};
