import { css } from '@/styled-system/css';

export const styles = {
  wrapper: css({
    width: '100%'
  }),
  grid: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))',
    gap: '0.9rem'
  }),
  card: css({
    padding: '1rem',
    borderRadius: '1.15rem',
    background: 'rgba(255, 255, 255, 0.82)',
    border: '1px solid rgba(221, 228, 239, 0.95)',
    boxShadow: '0 10px 22px rgba(15, 23, 42, 0.05)'
  }),
  cardHeader: css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '0.875rem',
    marginBlockEnd: '0.9rem'
  }),
  cardTitleGroup: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  }),
  cardIcon: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    inlineSize: '2.5rem',
    blockSize: '2.5rem',
    borderRadius: '0.9rem',
    fontSize: '1rem',
    '& > i.icon': {
      margin: '0',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1'
    }
  }),
  accentBlue: css({
    background: '#e8f1ff',
    color: '#295db3'
  }),
  accentRed: css({
    background: '#fff0f0',
    color: '#c73f4f'
  }),
  accentGreen: css({
    background: '#ebf8ee',
    color: '#218a45'
  }),
  cardTitle: css({
    color: '#1d3554',
    fontSize: '0.95rem',
    fontWeight: '700'
  }),
  cardLabel: css({
    color: '#6b7f98',
    fontSize: '0.8rem',
    marginBlockStart: '0.15rem'
  }),
  cardValue: css({
    color: '#12253d',
    fontSize: '2rem',
    lineHeight: '1',
    fontWeight: '700',
    letterSpacing: '-0.04em'
  }),
  progressLabel: css({
    marginBlockEnd: '0.45rem',
    color: '#5c718d',
    fontSize: '0.82rem',
    fontWeight: '600'
  }),
  progress: css({
    margin: '0 !important'
  })
};
