import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

// TODO: Test it here
test('renders header', () => {
  const { getByText } = render(<App />);
  const homeElement = getByText(/Plot/i);
  expect(homeElement).toBeInTheDocument();
});
