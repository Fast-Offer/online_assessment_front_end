import { render, screen } from '@testing-library/react';
import React from 'react';
import Login from '../Login';


describe('LoginForm Component', () => {
  it('should have email input', () => {
    render(<Login/>)
    const emailInput = screen.getByPlaceholderText(/Email/);
    expect(emailInput).toBeInTheDocument()
  })
})
