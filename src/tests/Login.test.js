import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/RenderWith';

describe('Testando tela de login', () => {
  const email = 'tryber@teste.com';

  test('1-Verifica se os inputs "email" e "password" são renderizados', () => {
    renderWithRouter(<App />);

    const emailPlaceholder = screen.getByTestId('email-input');
    const passPlaceholder = screen.getByTestId('password-input');

    expect(emailPlaceholder).toBeInTheDocument();
    expect(passPlaceholder).toBeInTheDocument();
  });
  test('checks if the wallet screen is rendered after logging in with correct data', () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId(/email-input/i);
    const passInput = screen.getByTestId(/password-input/i);
    const loginButton = screen.getByRole('button', { name: /enter/i });

    userEvent.type(emailInput, email);
    userEvent.type(passInput, '1234567');
    userEvent.click(loginButton);

    expect(history.location.pathname).toBe('/meals');
  });
});
