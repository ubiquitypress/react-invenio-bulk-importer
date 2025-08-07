import { css } from '@/styled-system/css';

export const styles = {
  headerContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBlockEnd: '0.625rem'
  }),
  listItemContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  fileContentContainer: css({
    flex: '1 1 auto'
  }),
  fileInfoContainer: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }),
  errorMessage: css({
    marginBlockStart: '0.3125rem'
  })
};
