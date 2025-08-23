import { css } from '@/styled-system/css';

export const styles = {
  checkboxContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    wordBreak: 'break-all',
    marginInlineStart: '1rem',

    '&:not(:last-child)': {
      marginBlockEnd: '0.5rem'
    }
  }),

  childAggContainer: css({
    marginInlineStart: '1.5rem',
    marginBlockStart: '0.5rem'
  })
};
