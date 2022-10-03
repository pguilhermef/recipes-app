import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/RenderWith';

describe('Testa o componente Profile', () => {
  beforeEach(() => {
    global.localStorage.setItem('user', JSON.stringify({ email: 'teste@trybe.com' }));
  });

  test('Testa se os elementos da página são renderizados corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const email = screen.getByTestId('profile-email');
    const testEmail = screen.getByText(/teste@trybe.com/i);
    const doneRecipes = screen.getByTestId('profile-done-btn');
    const favoriteRecipes = screen.getByTestId('profile-favorite-btn');
    const logout = screen.getByTestId('profile-logout-btn');

    expect(email).toBeInTheDocument();
    expect(testEmail).toBeInTheDocument();
    expect(doneRecipes).toBeInTheDocument();
    expect(favoriteRecipes).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão Logout, o Local Storage é esvaziado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const logout = screen.getByTestId('profile-logout-btn');
    userEvent.click(logout);
    expect(localStorage).toHaveLength(0);
  });
});
