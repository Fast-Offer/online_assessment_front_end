import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../Form';

test('renders form', () => {
  render(<Form />);
  const linkElement = screen.getByPlaceholderText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
