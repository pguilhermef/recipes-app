import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';

function Drinks() {
  const {
    drinksToFilter,
    drinksFilterButtons,
    setToFilterDrinks,
    toFilterDrinks,
  } = useContext(AppReceitasContext);
  const handleFilterCategory = ({ target }) => {
    if (target.value === toFilterDrinks) return setToFilterDrinks('');
    setToFilterDrinks(target.value);
  };

  return (
    <div>
      <Header />
      { drinksFilterButtons && drinksFilterButtons
        .filter((drink, index) => index <= Number('4'))
        .map(({ strCategory }, index) => (
          <button
            onClick={ handleFilterCategory }
            value={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            key={ index }
            type="button"
          >
            { strCategory }

          </button>
        )) }
      <button
        onClick={ () => setToFilterDrinks('') }
        data-testid="All-category-filter"
        type="button"
      >
        All

      </button>
      { drinksToFilter && drinksToFilter
        .filter((drink, index) => index <= Number('11'))
        .map((drink, index) => (
          <Link to={ `/drinks/${drink.idDrink}` } key={ index }>
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
            </div>
          </Link>
        ))}
      <Footer />
    </div>
  );
}

export default Drinks;
