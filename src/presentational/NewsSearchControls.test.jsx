import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsSearchControls from './NewsSearchControls';

describe('NewsSearchControls component', () => {
  afterEach(() => cleanup());
  it('renders NewsSearchControls', () => {
    const { asFragment } = render(<NewsSearchControls
      searchText="hello"
      onChange={jest.fn()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
