import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';

function Drinks() {
  const { drinksToFilter, drinksFilterButtons } = useContext(AppReceitasContext);

  return (
    <div>
      <Header />
      { drinksFilterButtons && drinksFilterButtons
        .filter((drink, index) => index <= Number('5'))
        .map(({ strCategory }, index) => (
          <button
            data-testid={ `data-testid=${strCategory}-category-filter` }
            key={ index }
            type="button"
          >
            { strCategory }

          </button>
        )) }
      { drinksToFilter && drinksToFilter
        .filter((drink, index) => index <= Number('11'))
        .map((drink, index) => (
          <div
            data-testid={ `${index}-recipe-card` }
            key={ drink.idDrink }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
            />
            <span data-testid={ `${index}-card-name` }>{ drink.strDrink }</span>
          </div>))}
      <Footer />
    </div>
  );
}

export default Drinks;
