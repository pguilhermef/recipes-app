import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';
import '../styles/index.css';
import '../styles/Recipes.css';

function Meals() {
  const history = useHistory();
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
    <>
      <Header />
      { /* Botões */ }
      <main className="meals-page">
        <div className="container">
          <div className="meal-buttons">
            { mealsFilterButtons && mealsFilterButtons
              .filter((meals, index) => index <= Number('4'))
              .map(({ strCategory }, index) => (
                <button
                  className="btn btn-dark btn-sm mt-1"
                  style={ { backgroundColor: '#421d1d' } }
                  onClick={ handleFilterCategory }
                  value={ strCategory }
                  data-testid={ `${strCategory}-category-filter` }
                  key={ index }
                  type="button"
                >
                  { strCategory }
                </button>
              )) }
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-dark mt-1"
              style={ { backgroundColor: '#421d1d' } }
              onClick={ () => setToFilterMeals('') }
              data-testid="All-category-filter"
              type="button"
            >
              All
            </button>
          </div>
        </div>
        { /* Comidas */ }
        <div className="container mt-3">
          <div className="row justify-content-center">
            { mealsToFilter && mealsToFilter
              .filter((meal, index) => index <= Number('11'))
              .map((meal, index) => (
                <Link
                  to={ `/meals/${meal.idMeal}` }
                  className="col-6 p-2 my-1 remove-link-color"
                  data-testid={ `${index}-recipe-card` }
                  key={ index }
                >
                  <div
                    className="glassmorphism text-center"
                    style={ { borderColor: '#421d1d' } }
                  >
                    <p
                      data-testid={ `${index}-card-name` }
                      className="my-2 text-light"
                    >
                      { meal.strMeal }
                    </p>

                    <img
                      data-testid={ `${index}-card-img` }
                      src={ meal.strMealThumb }
                      alt={ meal.strMeal }
                      className="img-fluid rounded adjust-thumb"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Meals;
