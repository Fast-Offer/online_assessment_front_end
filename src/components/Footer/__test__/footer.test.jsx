import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('reders footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Copyright/i);
  expect(linkElement).toBeInTheDocument();
});
