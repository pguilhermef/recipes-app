import { useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import numbers from '../helpers/helpers';
import '../styles/index.css';

export default function DrinksRecipes({ value }) {
  const maxRecommended = 6;
  const [buttonStart, setButtonStart] = useState(true);
  const [apiDrink, setApiDrink] = useState([]);
  const [recommendedMeals, setRecommendedMels] = useState();
  useEffect(() => {
    const getApiResult = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${value[0].idDrink}`);
      const result = await response.json();
      setApiDrink(result.drinks[0]);
    };
    getApiResult();
  }, [value]);

  const handleStartRecipe = () => {
    setButtonStart(false);
  };

  useEffect(() => {
    const fetchRecommendedMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const result = await response.json();
      setRecommendedMels(result.meals);
    };
    fetchRecommendedMeals();
  }, []);

  // console.log(value.map((item, i) => `${[i + 1]}`));
  if (value) {
    return (
      value && (
        <main className="drinks-page adjust-menu-infos">
          {/* Imagem */}
          <img
            alt={ value[0].strDrink }
            src={ value[0].strDrinkThumb }
            data-testid="recipe-photo"
            className="img-fluid img-thumbnail mt-4 recipe-detail-thumbnail"
          />
          {/* Nome e Ingredientes */}
          <div className="text-light">
            <h3 className="mt-2" data-testid="recipe-title">{ value[0].strDrink }</h3>

            <div
              data-testid="recipe-category"
            >
              <span>
                {value[0].strCategory}
                {' '}
                -
                {' '}
                {value[0].strAlcoholic}
              </span>
            </div>
            <div className="mt-2 container">
              <h3>Ingredientes:</h3>
              <ul className="list-group">
                {apiDrink && numbers.map((i) => (
                  apiDrink[`strIngredient${[i]}`])
              && (
                <li
                  data-testid={ `${i - 1}-ingredient-name-and-measure` }
                  key={ apiDrink[`strIngredient${[i]}`] }
                  className="list-group-item"
                >
                  {apiDrink[`strIngredient${[i]}`]}
                  {apiDrink[`strMeasure${i}`]}
                </li>
              ))}
              </ul>
            </div>
          </div>
          {/* Modo de Preparo */}
          <div className="container text-light glassmorphism">
            <h3 className="mt-2">Modo de preparo:</h3>
            <p data-testid="instructions">{ value[0].strInstructions }</p>
          </div>
          {/* Recomendado */}
          <div className="text-light">
            <h3 className="container title-meals-details">Recommended:</h3>

            <div className="container-fluid">
              <div className="row flex-row flex-nowrap overflow-auto">
                {recommendedMeals
              && (recommendedMeals.slice(0, maxRecommended)
                .map(({ strMealThumb, strMeal, idMeal }, index) => (
                  <div
                    key={ idMeal }
                    className="glassmorphism me-1 mb-5"
                    data-testid={ `${index}-recommendation-card` }
                    style={ { width: '11rem' } }
                  >
                    <h5
                      className="mt-1"
                      data-testid={ `${index}-recommendation-title` }
                    >
                      { strMeal }
                    </h5>

                    <img
                      src={ strMealThumb }
                      alt={ strMeal }
                      className="card-img-top rounded img-thumbnail"
                    />

                  </div>
                )))}
              </div>
            </div>
          </div>

          {buttonStart && (
            <button
              data-testid="start-recipe-btn"
              className="btn buttonStart text-light"
              type="button"
              onClick={ handleStartRecipe }
              style={ { backgroundColor: '#421d1d' } }
            >
              Start Recipe

            </button>
          )}

        </main>)
    );
  }
}

DrinksRecipes.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: string,
      strDrink: string,
      strDrinkThumb: string,
      strAlcoholic: string,
      strCategory: string,
      strInstructions: string,
    }),
  ).isRequired,
};
