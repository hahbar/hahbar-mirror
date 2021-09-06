import React from 'react';
import { providerWrapper } from './utils/testUtils';
import App from './App';

test('renders coming soon header', () => {
  const rendered = providerWrapper(<App />);
  const linkElement = rendered.getByText(/Coming soon.../i);
  expect(linkElement).toBeInTheDocument();
});
