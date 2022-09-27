import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../components/Footer';

describe('Testa o componente Footer', () => {
  test('Testa se componente Footer é rendenizado', () => {
    render(<Footer />);
  });
});
