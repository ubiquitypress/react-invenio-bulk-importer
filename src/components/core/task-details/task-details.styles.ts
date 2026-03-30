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
  }),
  optionsSummary: css({
    marginBlockStart: '0.875rem',
    borderRadius: '0.75rem',
    borderColor: '#d9e6d4 !important',
    background: 'linear-gradient(180deg, #fbfdf9 0%, #f5faf2 100%) !important',
    boxShadow: 'none !important'
  }),
  optionsHeading: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBlockEnd: '0.625rem',
    color: '#2f5d34',
    fontSize: '0.875rem',
    fontWeight: '600'
  }),
  optionsList: css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  })
};
