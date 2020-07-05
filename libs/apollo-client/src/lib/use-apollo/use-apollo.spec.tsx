import React from 'react';
import { render } from '@testing-library/react';

import { initializeApollo } from './use-apollo';

describe('UseApollo', () => {
  it('should render successfully', () => {
    expect(initializeApollo()).toBeTruthy();
  });
});
