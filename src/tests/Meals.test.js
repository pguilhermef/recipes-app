import { render } from '@testing-library/react';
import React from 'react';
import Meals from '../components/Meals';

describe('Testa o componente Meals', () => {
  test('Testa se componente Meals é rendenizado', () => {
    render(<Meals />);
  });
});
