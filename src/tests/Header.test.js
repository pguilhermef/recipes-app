import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/RenderWith';
// import Header from '../components/Header';
import App from '../App';
// import Meals from '../components/Meals';

describe('Testa o componente Header', () => {
  it('Ao clicar na "img" do profile é redirecionado para a página "/profile"', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const buttonProfile = screen.getByTestId('profile-top-btn');

    expect(buttonProfile).toBeInTheDocument();

    userEvent.click(buttonProfile);

    await waitFor(() => expect(history.location.pathname).toBe('/profile'));
  });
  it('"VERIFICA SE O BOTAO SEARCH FUNCIONA, passa ai pfv "', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const buttonSearch = screen.getByTestId('search-top-btn');

    expect(buttonSearch).toBeInTheDocument();

    userEvent.click(buttonSearch);

    const componentSerachBar = screen.getByTestId('search-input');
    expect(componentSerachBar).toBeInTheDocument();
  });
});
