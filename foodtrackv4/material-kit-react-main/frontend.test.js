import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import SignInBasic from './SignInBasic';

jest.mock('axios');

describe('SignInBasic', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form correctly', () => {
    const { getByLabelText, getByText } = render(<SignInBasic />);
  
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Iniciar Sesión')).toBeInTheDocument();
    expect(getByText("Don't have an account?")).toBeInTheDocument();
  });

  test('submits form and redirects user on successful login', async () => {
    const mockResponse = {
      data: {
        api_token: 'api_token',
        token: 'token',
        user_id: 'user_id',
        role: 'admin',
      },
    };

    axios.post.mockResolvedValue(mockResponse);

    const { getByLabelText, getByText } = render(<SignInBasic />);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Iniciar Sesión');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:8000/api/usuarios/login',
        { email: 'test@example.com', password: 'password123' },
        { headers: { 'Content-Type': 'application/json' } }
      );
      expect(document.cookie).toEqual('api_token=token');
      expect(document.cookie).toEqual('user_id=user_id');
      expect(document.cookie).toEqual('role=admin');
      expect(window.location.href).toEqual('http://localhost:3000/homeadmin');
    });
  });

  test('displays error message on failed login', async () => {
    const errorMessage = 'Invalid credentials';
    axios.post.mockRejectedValue(new Error(errorMessage));

    const { getByLabelText, getByText, findByText } = render(<SignInBasic />);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Iniciar Sesión');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    const errorElement = await findByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});