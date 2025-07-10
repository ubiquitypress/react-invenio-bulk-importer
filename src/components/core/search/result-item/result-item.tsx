import type { InvenioTask } from '@/types';
import React from 'react';
import {
  Item,
  ItemDescription,
  ItemExtra,
  ItemHeader
} from 'semantic-ui-react';
import { styles } from './result-item.styles';

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
