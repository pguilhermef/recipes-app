import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/RenderWith';

const pathFavoriteRecipe = '/favorite-recipes';
const mealButton = 'filter-by-meal-btn';
const drinkButton = 'filter-by-drink-btn';
const allButton = 'filter-by-all-btn';

describe('Testa o componente Done Recipes', () => {
  test('Testa se os elementos da tela são renderizados corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pathFavoriteRecipe);

    const allBtn = screen.getByTestId(allButton);
    const mealBtn = screen.getByTestId(mealButton);
    const drinkBtn = screen.getByTestId(drinkButton);
    const totalButtons = screen.getAllByRole('button');

    expect(allBtn).toBeInTheDocument();
    expect(mealBtn).toBeInTheDocument();
    expect(drinkBtn).toBeInTheDocument();
    expect(totalButtons).toHaveLength(3);
  });
});
