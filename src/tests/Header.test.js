import React from 'react';
// import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import renderWithRouter from './helpers/RenderWith';
import Header from '../components/Header';
import App from '../App';

describe('Testa o componente Header', () => {
  test('Testa se o ícone do perfil é rendenizado', () => {
    render(<Header />);
  });

  test('Testa se o titulo da pagina é rendenizado de maneira correta', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/drinks');

    expect(history.location.pathname).toBe('/drinks');
  });

  test('Testa se o ícone de pesquisa é rendenizado', () => {

  });

  test('Testa se o titulo da página é rendenizado', () => {

  });

  test('Testa se os ícones podem ser encontrados em "src/images/profileIcon.svg" e em "src/images/searchIcon.svg"', () => {

  });

  test('Testa se cada página tem seu próprio título ao ser rendenizada pelo Header', () => {

  });
});
