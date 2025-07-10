import React from 'react';
import { Count, Sort } from 'react-searchkit';
import { Grid } from 'semantic-ui-react';
import { useSearch } from '../provider';

export const SearchToolbar = () => {
  const { config } = useSearch();

  return (
    <Grid>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column width={8}>
          <Count label={(cmp: string) => <p>{cmp} result(s) found</p>} />
        </Grid.Column>
        <Grid.Column width={8} textAlign='right'>
          <span>Sort by: </span>
          <Sort values={config.sortOptions} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
