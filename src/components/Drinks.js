import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';
import '../styles/Recipes.css';
import '../styles/DrinksRecipes.css';

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
    <>
      <Header />
      { /* Botões */ }
      <main className="drinks-page">
        <div className="container">
          <div className="drink-buttons">
            { drinksFilterButtons && drinksFilterButtons
              .filter((drinks, index) => index <= Number('4'))
              .map(({ strCategory }, index) => (
                <button
                  className="btn btn-dark btn-sm mt-1"
                  style={ { backgroundColor: '#421d1d' } }
                  onClick={ handleFilterCategory }
                  value={ strCategory }
                  data-testid={ `${strCategory}-category-filter` }
                  id={ `btn-${index}` }
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
              onClick={ () => setToFilterDrinks('') }
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
            { drinksToFilter && drinksToFilter
              .filter((meal, index) => index <= Number('11'))
              .map((meal, index) => (
                <Link
                  to={ `/drinks/${meal.idDrink}` }
                  className="col-6 p-2 my-1 remove-link-color"
                  data-testid={ `${index}-recipe-card` }
                  key={ index }
                >
                  <div
                    className="glassmorphism text-center"
                  >
                    <p
                      data-testid={ `${index}-card-name` }
                      className="my-2"
                    >
                      { meal.strDrink }
                    </p>

                    <img
                      data-testid={ `${index}-card-img` }
                      src={ meal.strDrinkThumb }
                      alt={ meal.strDrink }
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

export default Drinks;
