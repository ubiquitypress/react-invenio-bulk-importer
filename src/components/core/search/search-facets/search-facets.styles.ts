import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    minInlineSize: '14rem',
    paddingInlineEnd: '1rem',
    paddingBlock: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    flex: 0,
    marginBlockStart: '7rem'
  }),

  header: css({
    fontSize: '1.1rem !important'
  }),

  checkboxContainer: css({
    wordBreak: 'break-all',
    marginInlineStart: '1rem',

    '&:not(:last-child)': {
      marginBlockEnd: '0.5rem'
    }
  })
};
