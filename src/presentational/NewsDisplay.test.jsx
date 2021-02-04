import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsDisplay from '../controls/NewsDisplay';

describe('NewsDisplay component', () => {
  afterEach(() => cleanup());
  it('renders NewsDisplay', () => {
    const { asFragment } = render(<NewsDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});
