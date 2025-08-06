import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export const Spinner = () => {
  return (
    <Segment basic padded='very'>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </Segment>
  );
};
