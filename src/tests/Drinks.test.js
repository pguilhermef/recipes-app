import { render } from '@testing-library/react';
import React from 'react';
import Drinks from '../components/Drinks';

describe('Testa o componente Drinks', () => {
  test('Testa se componente Drinks é rendenizado', () => {
    render(<Drinks />);
  });
});
