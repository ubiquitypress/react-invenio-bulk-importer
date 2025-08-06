import { css } from '@/styled-system/css';

export const styles = {
  actionsCell: css({
    inlineSize: '15rem'
  }),
  errorContainer: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.3125rem',
    color: 'red',
    fontSize: '0.75rem',
    marginBlockEnd: '0.3125rem'
  }),
  clearErrorButton: css({
    marginInlineStart: '0.3125rem',
    fontSize: '0.625rem'
  }),
  actionsContainer: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.625rem'
  })
};
