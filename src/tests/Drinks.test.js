import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../components/Drinks';
import renderWithRouter from './helpers/RenderWith';

describe('Testa o componente Drinks', () => {
  it('testar o sistema de busca de bebidas', async () => {
    const mockAPIDrinksIngridients = {
      drinks: [{
        strDrink: 'Caipirinha',
        idDrink: 1,
        strDrinkThumb: URLMOCKDRINK,
      }, {
        strDrink: 'Caipirosca',
        idDrink: 2,
        strDrinkThumb: URLMOCKDRINK,
      }],
    };

    global.fetch = async () => ({
      json: async () => mockAPIDrinksIngridients,
    });

    const { history } = renderWithRouter(<App />);
    history.push('/drinks');

    const searchIcon = screen.getByTestId('Ordinary Drink=category');
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    // const searchButton = screen.getByTestId(searchButtonDataTest);
    // expect(searchButton).toBeInTheDocument();
    // userEvent.click(searchButton);
  });
});
