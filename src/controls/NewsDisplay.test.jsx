import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsDisplay from './NewsDisplay';

global.fetch = require('node-fetch');

describe('NewsDisplay component', () => {
  afterEach(() => cleanup());
  it('renders NewsDisplay', () => {
    const { asFragment } = render(<NewsDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});
