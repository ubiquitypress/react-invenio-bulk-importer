import { css } from '@/styled-system/css';

export const styles = {
  optionsSection: css({
    marginBlockEnd: '1rem',
    border: 'none',
    padding: 0,
    minInlineSize: 0
  }),
  optionsLegend: css({
    marginBlockEnd: '0.5rem',
    padding: 0,
    fontWeight: '600'
  }),
  fileInput: css({
    marginBlockStart: '0.5rem'
  }),
  helpText: css({
    marginBlockStart: '0.5rem',
    fontSize: '0.75rem',
    color: '#666'
  }),
  buttonContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '0.5rem'
  })
};
