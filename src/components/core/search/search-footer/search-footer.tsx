import React from 'react';
import { Pagination, ResultsPerPage } from 'react-searchkit';
import { Grid } from 'semantic-ui-react';
import { useSearch } from '../provider';

export const SearchFooter = () => {
  const { config } = useSearch();

  return (
    <Grid>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column width={14} textAlign='center'>
          <Pagination options={{ size: 'mini' }} />
        </Grid.Column>
        <Grid.Column width={2} textAlign='right'>
          <ResultsPerPage
            values={config.paginationOptions.resultsPerPage}
            label={(cmp: string) => <p>{cmp} results per page</p>}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
