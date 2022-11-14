import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/RenderWith';

const URLMOCKMEAL = 'https://www.sabornamesa.com.br/media/k2/items/cache/dee4183b3eece6f1f1fda5b7115d2824_XL.jpg';
const URLMOCKDRINK = 'https://i0.wp.com/drinksimples.com.br/wp-content/uploads/2021/01/drinksimples_caipirinha.jpg?resize=1536%2C1536&ssl=1';
const searchIconDataTest = 'search-top-btn';
const searchInputDataTest = 'search-input';
const ingredientRadioDataTest = 'ingredient-search-radio';
const firstLetterRadioDataTest = 'first-letter-search-radio';
const searchButtonDataTest = 'exec-search-btn';
const renderedRecipe1DataTest = '0-recipe-card';
const renderedRecipe2DataTest = '1-recipe-card';
describe('Testes SearchBar', () => {
  afterEach(() => jest.clearAllMocks());

  it('testar o sistema de busca de comidas via ingredientes', async () => {
    const mockAPIMealsIngridients = {
      meals: [{
        strMeal: 'Frangão',
        idMeal: 1,
        strMealThumb: URLMOCKMEAL,
      }, {
        strMeal: 'Franguinho',
        idMeal: 2,
        strMealThumb: URLMOCKMEAL,
      }],
    };

    global.fetch = async () => ({
      json: async () => mockAPIMealsIngridients,
    });

    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const searchIcon = screen.getByTestId(searchIconDataTest);
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    const searchInput = screen.getByTestId(searchInputDataTest);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'chicken');
    expect(searchInput).toHaveValue('chicken');

    const ingredientRadio = screen.getByTestId(ingredientRadioDataTest);
    expect(ingredientRadio).toBeInTheDocument();
    userEvent.click(ingredientRadio);

    const searchButton = screen.getByTestId(searchButtonDataTest);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);

    const renderedRecipe1 = await screen.findByTestId(renderedRecipe1DataTest);
    expect(renderedRecipe1).toBeInTheDocument();
    const renderedRecipe2 = await screen.findByTestId(renderedRecipe2DataTest);
    expect(renderedRecipe2).toBeInTheDocument();
    userEvent.click(renderedRecipe2);

    expect(history.location.pathname).toBe('/meals/2');
  });
  it('testar o sistema de busca de comidas via nome', async () => {
    const mockAPIMealsIngridients = {
      meals: [{
        strMeal: 'Frangão',
        idMeal: 1,
        strMealThumb: URLMOCKMEAL,
      }, {
        strMeal: 'Franguinho',
        idMeal: 2,
        strMealThumb: URLMOCKMEAL,
      }],
    };

    global.fetch = async () => ({
      json: async () => mockAPIMealsIngridients,
    });

    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const searchIcon = screen.getByTestId(searchIconDataTest);
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    const searchInput = screen.getByTestId(searchInputDataTest);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'chicken');
    expect(searchInput).toHaveValue('chicken');

    const ingredientRadio = screen.getByTestId('name-search-radio');
    expect(ingredientRadio).toBeInTheDocument();
    userEvent.click(ingredientRadio);

    const searchButton = screen.getByTestId(searchButtonDataTest);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);

    const renderedRecipe1 = await screen.findByTestId(renderedRecipe1DataTest);
    expect(renderedRecipe1).toBeInTheDocument();
    const renderedRecipe2 = await screen.findByTestId(renderedRecipe2DataTest);
    expect(renderedRecipe2).toBeInTheDocument();
  });

  it('testar o sistema de busca de comidas first letter', async () => {
    const mockAPIMealsIngridients = {
      meals: [{
        strMeal: 'Frangão',
        idMeal: 1,
        strMealThumb: URLMOCKMEAL,
      }, {
        strMeal: 'Franguinho',
        idMeal: 2,
        strMealThumb: URLMOCKMEAL,
      }],
    };

    global.fetch = async () => ({
      json: async () => mockAPIMealsIngridients,
    });

    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const searchIcon = screen.getByTestId(searchIconDataTest);
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    const searchInput = screen.getByTestId(searchInputDataTest);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'chicken');
    expect(searchInput).toHaveValue('chicken');

    const firstLetterRadio = screen.getByTestId(firstLetterRadioDataTest);
    expect(firstLetterRadio).toBeInTheDocument();
    userEvent.click(firstLetterRadio);

    const searchButton = screen.getByTestId(searchButtonDataTest);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);

    const renderedRecipe1 = await screen.findByTestId(renderedRecipe1DataTest);
    expect(renderedRecipe1).toBeInTheDocument();
    const renderedRecipe2 = await screen.findByTestId(renderedRecipe2DataTest);
    expect(renderedRecipe2).toBeInTheDocument();
    userEvent.click(renderedRecipe2);

    expect(history.location.pathname).toBe('/meals');
  });

  it('testar o sistema de busca de comidas first letter', async () => {
    const mockAPIMealsIngridients = {
      meals: [{
        strMeal: 'Frangão',
        idMeal: 1,
        strMealThumb: URLMOCKMEAL,
      }],
    };

    global.fetch = async () => ({
      json: async () => mockAPIMealsIngridients,
    });

    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const searchIcon = screen.getByTestId(searchIconDataTest);
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    const searchInput = screen.getByTestId(searchInputDataTest);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'chicken');
    expect(searchInput).toHaveValue('chicken');

    const firstLetterRadio = screen.getByTestId(firstLetterRadioDataTest);
    expect(firstLetterRadio).toBeInTheDocument();
    userEvent.click(firstLetterRadio);

    const searchButton = screen.getByTestId(searchButtonDataTest);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
  });
  it('testar se ao retornar uma receita ele vai direto para página', async () => {
    const mockAPIDrinksIngridients = {
      drinks: [{
        strDrink: 'Caipirinha',
        idDrink: 1,
        strDrinkThumb: URLMOCKDRINK,
      }],
    };

    global.fetch = async () => ({
      json: async () => mockAPIDrinksIngridients,
    });

    const { history } = renderWithRouter(<App />);
    history.push('/drinks');

    const searchIcon = screen.getByTestId(searchIconDataTest);
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    const searchInput = screen.getByTestId(searchInputDataTest);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'alcohol');
    expect(searchInput).toHaveValue('alcohol');

    const ingredientRadio = screen.getByTestId(ingredientRadioDataTest);
    expect(ingredientRadio).toBeInTheDocument();
    userEvent.click(ingredientRadio);

    const searchButton = screen.getByTestId(searchButtonDataTest);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
  });

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

    const searchIcon = screen.getByTestId(searchIconDataTest);
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    const searchInput = screen.getByTestId(searchInputDataTest);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'alcohol');
    expect(searchInput).toHaveValue('alcohol');

    const ingredientRadio = screen.getByTestId(ingredientRadioDataTest);
    expect(ingredientRadio).toBeInTheDocument();
    userEvent.click(ingredientRadio);

    const searchButton = screen.getByTestId(searchButtonDataTest);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
  });

  it('testar o alerta quando não encontrar nenhuma comida', async () => {
    const mockAPIMealsIngridients = {
      meals: null,
    };

    global.fetch = async () => ({
      json: async () => mockAPIMealsIngridients,
    });
    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const searchIcon = screen.getByTestId(searchIconDataTest);
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    const searchInput = screen.getByTestId(searchInputDataTest);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'xablau');
    expect(searchInput).toHaveValue('xablau');

    const ingredientRadio = screen.getByTestId('first-letter-search-radio');
    expect(ingredientRadio).toBeInTheDocument();
    userEvent.click(ingredientRadio);

    const searchButton = screen.getByTestId(searchButtonDataTest);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
  });

  it('testar o alerta quando não encontrar nenhuma comida', async () => {
    const mockAPIMealsIngridients = {
      meals: null,
    };

    global.fetch = async () => ({
      json: async () => mockAPIMealsIngridients,
    });
    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const searchIcon = screen.getByTestId(searchIconDataTest);
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);

    const searchInput = screen.getByTestId(searchInputDataTest);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'xablau');
    expect(searchInput).toHaveValue('xablau');

    const ingredientRadio = screen.getByTestId(ingredientRadioDataTest);
    expect(ingredientRadio).toBeInTheDocument();
    userEvent.click(ingredientRadio);

    const searchButton = screen.getByTestId(searchButtonDataTest);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
  });
});
