import { render } from '@testing-library/react';
import React from 'react';
import Profile from '../pages/Profile';

describe('Testa o componente Profile', () => {
  test('Testa se componente Profile é rendenizado', () => {
    render(<Profile />);
  });
});
