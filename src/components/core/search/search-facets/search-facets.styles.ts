import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    minInlineSize: '14rem',
    paddingInline: '1rem',
    paddingBlock: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }),

  header: css({
    fontSize: '1.5rem !important'
  })
};
