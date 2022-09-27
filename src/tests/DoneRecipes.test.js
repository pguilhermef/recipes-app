import { render } from '@testing-library/react';
import React from 'react';
import DoneRecipes from '../components/DoneRecipes';

describe('Testa o componente DoneRecipes', () => {
  test('Testa se componente DoneRecipes é rendenizado', () => {
    render(<DoneRecipes />);
  });
});
