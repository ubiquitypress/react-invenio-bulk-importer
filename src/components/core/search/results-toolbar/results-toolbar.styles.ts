import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  }),

  sortByContainer: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  })
};
