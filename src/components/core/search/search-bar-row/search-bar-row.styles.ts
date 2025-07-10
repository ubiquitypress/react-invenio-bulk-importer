import { css } from '@/styled-system/css';

export const styles = {
  searchBarRow: css({
    display: 'flex !important',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '1rem',
    paddingBlock: '0.5rem',
    minBlockSize: '3rem'
  }),
  facets: css({
    flex: '0 0 auto'
  }),
  search: css({
    flex: '1 1 auto',
    minInlineSize: '15rem'
  }),
  import: css({
    flex: '0 0 auto'
  }),

  visuallyHidden: css({
    srOnly: true
  })
};
