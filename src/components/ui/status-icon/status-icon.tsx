import type { InvenioImporterRecordStates, InvenioTask } from '@/types';
import React from 'react';
import { Icon } from 'semantic-ui-react';

interface StatusIconProps extends React.ComponentProps<typeof Icon> {
  status: InvenioTask['status'] | InvenioImporterRecordStates;
}

export const StatusIcon: React.FC<StatusIconProps> = ({ status, ...rest }) => {
  if (
    status === 'damaged' ||
    status === 'imported with failures' ||
    status === 'validated with failures' ||
    status === 'serializer validation failed' ||
    status === 'validation failed' ||
    status === 'import failed'
  ) {
    return <Icon name='close' color='red' {...rest} />;
  } else if (
    status === 'success' ||
    status === 'validated' ||
    status === 'created'
  ) {
    return <Icon name='check circle' {...rest} />;
  } else if (status === 'importing' || status === 'validating') {
    return <Icon name='spinner' loading {...rest} />;
  }

  // Default case for any other status
  return <Icon {...rest} />;
};
