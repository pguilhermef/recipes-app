import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';

function Meals() {
  const { mealsToFilter } = useContext(AppReceitasContext);
  console.log(mealsToFilter);
  return (
    <div>
      <Header />
      { mealsToFilter
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
