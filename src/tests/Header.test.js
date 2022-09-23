import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWith';
import Header from '..';

describe('Testa o componente Header', () => {
  renderWithRouterAndRedux(<Header />);
  test('Testa se o ícone do perfil é rendenizado', () => {

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
