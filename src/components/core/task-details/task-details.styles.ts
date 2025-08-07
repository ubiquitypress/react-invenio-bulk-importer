import { css } from '@/styled-system/css';

export const styles = {
  headerContainer: css({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem'
  }),
  headerContent: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }),
  actionsContainer: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '1rem'
  })
};
