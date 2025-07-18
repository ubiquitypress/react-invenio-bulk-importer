import type { InvenioImporterRecordStatusType, InvenioTask } from '@/types';
import React from 'react';
import { Icon, Label as SemanticLabel } from 'semantic-ui-react';

interface LabelProps extends React.ComponentProps<typeof SemanticLabel> {
  status: InvenioTask['status'] | InvenioImporterRecordStatusType;
}

export const StatusLabel: React.FC<LabelProps> = ({
  status,
  children,
  ...rest
}) => {
  if (
    status === 'damaged' ||
    status === 'imported with failures' ||
    status === 'validated with failures' ||
    status === 'serializer validation failed' ||
    status === 'validation failed' ||
    status === 'import failed'
  ) {
    return (
      <SemanticLabel color='red' {...rest}>
        <Icon name='warning sign' />
        {children}
      </SemanticLabel>
    );
  } else if (
    status === 'success' ||
    status === 'validated' ||
    status === 'created'
  ) {
    return (
      <SemanticLabel color='green' {...rest}>
        <Icon name='check circle' />
        {children}
      </SemanticLabel>
    );
  } else if (status === 'importing' || status === 'validating') {
    return (
      <SemanticLabel color='blue' {...rest}>
        <Icon name='spinner' loading />
        {children}
      </SemanticLabel>
    );
  }

  // Default case for any other status
  return <SemanticLabel {...rest}>{children}</SemanticLabel>;
};
