export const formatOptionLabel = (optionKey: string): string =>
  optionKey
    .split('_')
    .map((part, index) => {
      if (part === 'doi') {
        return 'DOI';
      }

      return index === 0 ? `${part.charAt(0).toUpperCase()}${part.slice(1)}` : part;
    })
    .join(' ');
