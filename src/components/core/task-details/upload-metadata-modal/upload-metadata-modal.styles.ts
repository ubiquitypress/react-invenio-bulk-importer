import { css } from '@/styled-system/css';

export const styles = {
  selectedFileInfo: css({
    marginBlockStart: '0.5rem',
    color: '#666'
  }),
  fieldLabel: css({
    marginBlockEnd: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 'bold'
  }),
  actionsContainer: css({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.5rem'
  })
};
