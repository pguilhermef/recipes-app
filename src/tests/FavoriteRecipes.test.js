import { render } from '@testing-library/react';
import React from 'react';
import FavoriteRecipes from '../components/FavoriteRecipes';

describe('Testa o componente FavoriteRecipes', () => {
  test('Testa se componente FavoriteRecipes é rendenizado', () => {
    render(<FavoriteRecipes />);
  });
});
