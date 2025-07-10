import React from 'react';

export interface BaseProps {
  className?: string;
  'data-testid'?: string;
}

export interface OverridableComponents {
  [key: string]: React.ComponentType<unknown>;
}

// If you need to be more specific about component props
export interface OverridableComponentsTyped<T = Record<string, unknown>> {
  [key: string]: React.ComponentType<T>;
}
