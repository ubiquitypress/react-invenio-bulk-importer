import { css } from '@/styled-system/css';

export const styles = {
  page: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  }),
  detailsGrid: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
    gap: '1rem'
  })
};
