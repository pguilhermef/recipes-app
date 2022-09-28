import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';

function Meals({ history }) {
  const {
    passPathName,
    filteredList,
    mealsToFilter,
    mealsFilterButtons,
    setToFilterMeals,
    toFilterMeals,
  } = useContext(AppReceitasContext);
  useEffect(() => {
    passPathName(history.location.pathname);
  }, [passPathName, history]);

  useEffect(() => {
    const specificFood = () => {
      if (filteredList !== undefined
        && filteredList.meals !== null
        && filteredList.meals.length === Number('1')) {
        const { meals } = filteredList;
        history.push(`/meals/${meals[0].idMeal}`);
      }
    };

    specificFood();
  }, [filteredList, history]);

  const handleFilterCategory = ({ target }) => {
    if (target.value === toFilterMeals) return setToFilterMeals('');

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
          <Link to={ `/meals/${meal.idMeal}` } key={ index }>
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
            </div>
          </Link>
        ))}
      <Footer />
    </div>
  );
}

Meals.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Meals;
