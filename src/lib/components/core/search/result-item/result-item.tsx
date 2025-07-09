import React from 'react';
import {
  Item,
  ItemDescription,
  ItemExtra,
  ItemHeader,
  ItemMeta
} from 'semantic-ui-react';
import { styles } from './result-item.styles';
import type { InvenioTask } from '@/lib/types';

export const ResultItem = ({
  result,
  index
}: {
  result: InvenioTask;
  index: number;
}) => {
  return (
    <Item key={index} className={styles.container}>
      <ItemHeader as='a' href={`/works/${result.id}`}>
        {result.title || result.title || 'No title'}
      </ItemHeader>
      <ItemDescription>
        {result.description || result.description || 'No description'}
      </ItemDescription>
      <ItemExtra>Created: {result.created}</ItemExtra>
    </Item>
  );
};
