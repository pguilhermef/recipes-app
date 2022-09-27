import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';

function Drinks() {
  const { drinksToFilter } = useContext(AppReceitasContext);
  console.log(useContext(AppReceitasContext));
  console.log(drinks);

  return (
    <div>
      <Header />
      { drinksToFilter !== undefined && drinksToFilter
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
