import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/RenderWith';

const allButton = 'filter-by-all-btn';
const mealButton = 'filter-by-meal-btn';
const drinkButton = 'filter-by-drink-btn';
const doneRecipesPathname = '/done-recipes';
const localStorageDrinkName = 'GG';
const localStorageMealName = 'Corba';

beforeEach(() => {
  global.localStorage.setItem('doneRecipes', JSON.stringify(
    [
      {
        id: '52977',
        type: 'meal',
        nationality: 'Turkish',
        category: 'Side',
        alcoholicOrNot: '',
        name: 'Corba',
        image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
        doneDate: '02/10/2022',
        tags: ['Soup'],
      },
      {
        id: '178319',
        type: 'drink',
        nationality: '',
        category: 'Ordinary Drink',
        alcoholicOrNot: 'Optional alcohol',
        name: 'GG',
        image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
        doneDate: '01/10/2022',
        tags: [],
      },
    ],
  ));
});

describe('Testa o componente Done Recipes', () => {
  test('Testa se os elementos da tela são renderizados corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPathname);

    const allBtn = screen.getByTestId(allButton);
    const mealBtn = screen.getByTestId(mealButton);
    const drinkBtn = screen.getByTestId(drinkButton);
    const totalButtons = screen.getAllByRole('button');

    expect(allBtn).toBeInTheDocument();
    expect(mealBtn).toBeInTheDocument();
    expect(drinkBtn).toBeInTheDocument();
    expect(totalButtons).toHaveLength(3);
  });

  test('Testa se as receitas prontas são renderizadas corretamente', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPathname);

    const mealImg = await screen.findByTestId('0-horizontal-image');
    const mealCatAndNat = await screen.findByTestId('0-horizontal-top-text');
    const mealName = await screen.findByTestId('0-horizontal-name');
    const mealDoneDate = await screen.findByTestId('0-horizontal-done-date');
    const mealFirstTag = await screen.findByTestId('0-Soup-horizontal-tag');

    const drinkImg = await screen.findByTestId('1-horizontal-image');
    const drinkName = await screen.findByTestId('1-horizontal-name');
    const drinkDate = await screen.findByTestId('1-horizontal-done-date');
    const drinkAlcoholic = await screen.findByTestId('1-horizontal-top-text');
    const shareBtn = await screen.findByTestId('1-horizontal-share-btn');

    expect(mealImg).toBeInTheDocument();
    expect(mealCatAndNat).toBeInTheDocument();
    expect(mealName).toBeInTheDocument();
    expect(mealDoneDate).toBeInTheDocument();
    expect(mealFirstTag).toBeInTheDocument();

    expect(drinkImg).toBeInTheDocument();
    expect(drinkName).toBeInTheDocument();
    expect(drinkDate).toBeInTheDocument();
    expect(drinkAlcoholic).toBeInTheDocument();
    expect(shareBtn).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão "Meals", somente receitas de comida são renderizadas', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPathname);

    const mealBtn = screen.getByTestId(mealButton);
    userEvent.click(mealBtn);

    const mealName = await screen.findByText(localStorageMealName);
    expect(mealName).toBeInTheDocument();

    const drinkName = screen.queryByTestId('1-horizontal-name');
    expect(drinkName).not.toBeInTheDocument();
  });

  test('Testa se ao clicar no botão "Drinks", somente receitas de bebida são renderizadas', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPathname);

    const drinkBtn = screen.getByTestId(drinkButton);
    userEvent.click(drinkBtn);

    const drinkName = await screen.findByText(localStorageDrinkName);
    expect(drinkName).toBeInTheDocument();

    const mealName = screen.queryByTestId(localStorageMealName);
    expect(mealName).not.toBeInTheDocument();
  });

  test('Testa se ao clicar no botão "All", tanto comidas quanto bebidas são renderizadas', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPathname);
    const buttonAll = screen.getByTestId(allButton);
    userEvent.click(buttonAll);

    const mealName = await screen.findByText(localStorageMealName);
    expect(mealName).toBeInTheDocument();

    const drinkName = await screen.findByText(localStorageDrinkName);
    expect(drinkName).toBeInTheDocument();
  });
});
