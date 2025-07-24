import React from 'react';

export interface OverridableComponents {
  [key: string]: React.ComponentType<unknown>;
}

export interface OverridableComponentsTyped<T = Record<string, unknown>> {
  [key: string]: React.ComponentType<T>;
}
