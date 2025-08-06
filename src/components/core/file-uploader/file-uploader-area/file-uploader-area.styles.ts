import { css } from '@/styled-system/css';

export const styles = {
  hiddenInput: css({
    display: 'none'
  }),
  dropZone: css({
    minBlockSize: '7.5rem',
    border: '2px dashed #d4d4d5 !important',
    backgroundColor: 'transparent !important',
    cursor: 'pointer',
    opacity: 1
  }),
  dropZoneActive: css({
    border: '2px dashed #2185d0 !important',
    backgroundColor: '#f8f9fa !important'
  }),
  dropZoneDisabled: css({
    cursor: 'not-allowed',
    opacity: 0.6
  }),
  contentContainer: css({
    textAlign: 'center',
    paddingBlock: '1.25rem',
    paddingInline: '1.25rem'
  }),
  textContainer: css({
    marginBlockStart: '0.625rem'
  }),
  smallText: css({
    fontSize: '0.75rem',
    color: '#666'
  }),
  selectedFilesText: css({
    fontSize: '0.75rem',
    color: '#2185d0',
    marginBlockStart: '0.5rem'
  })
};