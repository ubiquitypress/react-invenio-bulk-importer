import { css } from '@/styled-system/css';

export const styles = {
  detailCard: css({
    paddingInline: '1rem',
    borderEndEndRadius: '1.25rem !important',
    borderEndStartRadius: '1.25rem !important',
    border: '1px solid #e4e9f2'
  }),
  accordionTrigger: css({
    cursor: 'pointer',
    padding: 0
  }),
  accordionHeading: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem'
  }),
  sectionTitle: css({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.625rem',
    color: '#1f3656',
    fontSize: '1rem',
    fontWeight: '700'
  }),
  accordionChevron: css({
    color: '#6c7f99'
  }),
  accordionContent: css({
    paddingBlockStart: '1rem'
  }),
  detailList: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
    marginBlockEnd: '1rem',
    gap: '0.75rem'
  }),
  detailItem: css({
    padding: '0.9rem',
    borderRadius: '1rem',
    background: '#f8fafd',
    border: '1px solid #e7edf5'
  }),
  detailLabel: css({
    marginBlockEnd: '0.35rem',
    color: '#6c7f99',
    fontSize: '0.76rem',
    fontWeight: '700',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  }),
  detailValue: css({
    color: '#16283f',
    fontSize: '0.96rem',
    fontWeight: '600',
    lineHeight: '1.5',
    wordBreak: 'break-word'
  })
};
