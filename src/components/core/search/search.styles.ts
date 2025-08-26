import { css } from '@/styled-system/css';

export const styles = {
  searchLayout: css({
    display: 'flex',
    flexDirection: ['column', 'row'], // Responsive layout: column on mobile, row on tablet+
    gap: '1rem'
  }),

  searchContent: css({
    flex: 1,
    minInlineSize: 0
  })
};
