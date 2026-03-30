import { css } from '@/styled-system/css';

export const styles = {
  heroSection: css({
    borderStartStartRadius: '1.25rem',
    borderStartEndRadius: '1.25rem',
    padding: '1rem',
    border: '1px solid #d9e2f2',
    borderBlockEnd: 'none',
    background: '#f7faff',
    boxShadow: 'none',
    margin: 0,
    overflow: 'hidden'
  }),
  heroLayout: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: '1.25rem'
  }),
  heroIntro: css({
    display: 'flex',
    flex: '1 1 32rem',
    minInlineSize: '18rem',
    gap: '1rem',
    alignItems: 'flex-start'
  }),
  headerContent: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    minInlineSize: 0
  }),
  kicker: css({
    color: '#4a6894',
    fontSize: '0.75rem',
    letterSpacing: 'widest',
    textTransform: 'uppercase',
    fontWeight: '700'
  }),
  heroTitle: css({
    margin: '0 !important',
    color: '#14233c !important',
    fontSize: 'clamp(1.85rem, 3vw, 2.5rem) !important',
    lineHeight: '1.1 !important'
  }),
  statusRow: css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    alignItems: 'center'
  }),
  metaPill: css({
    margin: '0 !important',
    borderRadius: '999px !important',
    background: 'rgba(255, 255, 255, 0.82) !important',
    color: '#24415f !important',
    border: '1px solid rgba(36, 65, 95, 0.12) !important',
    boxShadow: 'none !important'
  }),
  heroDescription: css({
    margin: 0,
    maxInlineSize: '52rem',
    color: '#41556f',
    fontSize: '1rem',
    lineHeight: '1.65'
  }),
  optionPills: css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem'
  }),
  optionPillActive: css({
    margin: '0 !important',
    borderRadius: '999px !important',
    background: '#edf7ee !important',
    color: '#266338 !important',
    border: '1px solid #cfe6d5 !important',
    boxShadow: 'none !important'
  }),
  optionPillInactive: css({
    margin: '0 !important',
    borderRadius: '999px !important',
    background: '#fff1f1 !important',
    color: '#a13c47 !important',
    border: '1px solid #f1cacf !important',
    boxShadow: 'none !important'
  }),
  actionsContainer: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.875rem',
    flex: '0 1 17rem',
    minInlineSize: '15rem',
    padding: '1rem',
    borderRadius: '1.25rem',
    background: 'rgba(255, 255, 255, 0.72)',
    border: '1px solid rgba(74, 104, 148, 0.28)'
  }),
  actionsHeader: css({
    color: '#4a6894',
    fontSize: '0.75rem',
    letterSpacing: 'widest',
    textTransform: 'uppercase',
    fontWeight: '700'
  }),
  actionButtons: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    '& > *': {
      width: '100%'
    }
  }),
  statusCardsSection: css({
    marginBlockStart: '1.25rem'
  })
};
