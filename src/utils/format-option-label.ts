/**
 * Formats an internal task option key into a human-readable label.
 *
 * @param optionKey - The raw option key, typically snake_case.
 * @returns A UI-friendly label for the option.
 */
export const formatOptionLabel = (optionKey: string): string => {
  return (
    optionKey
      // Break snake_case option keys into individual label parts.
      .split('_')
      .map((part, index) => {
        // Preserve DOI as an uppercase acronym.
        if (part === 'doi') {
          return 'DOI';
        }

        // Capitalize the first word and leave subsequent words readable.
        return index === 0
          ? `${part.charAt(0).toUpperCase()}${part.slice(1)}`
          : part;
      })
      // Recombine the transformed parts into a display label.
      .join(' ')
  );
};
