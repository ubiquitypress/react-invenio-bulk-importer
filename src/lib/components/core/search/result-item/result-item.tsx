import React from 'react';
import {
  Item,
  ItemDescription,
  ItemExtra,
  ItemHeader,
  ItemMeta
} from 'semantic-ui-react';
import { styles } from './result-item.styles';

export const ResultItem = ({ result, index }) => {
  return (
    <Item key={index} className={styles.container}>
      <ItemHeader as='a' href={`/works/${result.id}`}>
        {result.metadata?.title || result.title || 'No title'}
      </ItemHeader>
      <ItemMeta as='a'>
        {result.metadata?.creators?.map(c => c.person_or_org.name).join(', ')}
      </ItemMeta>
      <ItemDescription>
        {result.metadata?.description || result.description || 'No description'}
      </ItemDescription>
      <ItemExtra>Created: {result.created}</ItemExtra>
    </Item>
  );
};
