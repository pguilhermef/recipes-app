import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/RenderWith';
import App from '../App';

describe('Testa a página Recipes', () => {
  test('Verifica se rendeniza os drinks corretamente', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');

    await waitFor(() => {
      const oneDrink = screen.getByText('Shake');
      expect(oneDrink).toBeInTheDocument();
    }, { timeout: 3000 });

    expect(history.location.pathname).toBe('/drinks');
  });

  test('Verifica se rendeniza as refeiçoes corretamente', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    await waitFor(() => {
      const oneDrink = screen.getByText('Breakfast');
      expect(oneDrink).toBeInTheDocument();
    }, { timeout: 3000 });

    expect(history.location.pathname).toBe('/meals');
  });
});
