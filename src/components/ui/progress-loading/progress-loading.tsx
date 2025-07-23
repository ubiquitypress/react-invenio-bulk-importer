import type { OrchestrationSteps } from '@/types';
import React, { Fragment } from 'react';
import { Icon, Segment } from 'semantic-ui-react';

interface ProgressLoadingProps {
  progress: Record<OrchestrationSteps, number>;
}

export const ProgressLoading = ({ progress }: ProgressLoadingProps) => {
  return (
    <Fragment>
      {Object.entries(progress).map(([step, value]) => (
        <Segment.Inline basic key={step}>
          <Icon
            name='spinner'
            loading
            style={{
              marginInlineEnd: '0.5rem'
            }}
          />
          <strong>{step}:</strong> {value}%
        </Segment.Inline>
      ))}
    </Fragment>
  );
};
