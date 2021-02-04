import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsList from './NewsList';

describe('NewsList component', () => {
  afterEach(() => cleanup());
  it('renders NewsList', () => {
    const { asFragment } = render(<NewsList
      searchResults= {[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
