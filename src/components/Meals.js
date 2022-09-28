import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';

function Meals() {
  const {
    mealsToFilter,
    mealsFilterButtons,
    setToFilterMeals,
  } = useContext(AppReceitasContext);

  const handleFilterCategory = ({ target }) => {
    setToFilterMeals(target.value);
  };

  return (
    <div>
      <Header />
      { mealsFilterButtons && mealsFilterButtons
        .filter((meals, index) => index <= Number('4'))
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
        onClick={ () => setToFilterMeals('') }
        data-testid="All-category-filter"
        type="button"
      >
        All

      </button>
      { mealsToFilter && mealsToFilter
        .filter((meal, index) => index <= Number('11'))
        .map((meal, index) => (
          <div
            data-testid={ `${index}-recipe-card` }
            key={ meal.idMeal }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ meal.strMealThumb }
              alt={ meal.strMeal }
            />
            <span data-testid={ `${index}-card-name` }>{ meal.strMeal }</span>
          </div>))}
      <Footer />
    </div>
  );
}

export default Meals;
