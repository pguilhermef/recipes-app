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
  }, []);

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
        <main className="drinks-wallpaper">
          <img
            alt={ value[0].strDrink }
            src={ value[0].strDrinkThumb }
            data-testid="recipe-photo"
            className="img-fluid img-thumbnail"
          />
          <div data-testid="recipe-title">{ value[0].strDrink }</div>
          <div data-testid="recipe-category">
            {
              value[0].strCategory
            }
            {
              value[0].strAlcoholic
            }

          </div>
          <div className="container">
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
          <h3>Modo de preparo:</h3>
          <p data-testid="instructions">{ value[0].strInstructions }</p>
          <h3 className="title-meals-details">Recommended:</h3>
          <section className="wrapper">
            {recommendedMeals
      && (recommendedMeals.slice(0, maxRecommended)
        .map(({ strMealThumb, strMeal, idMeal }, index) => (
          <div
            className="item"
            key={ idMeal }
            data-testid={ `${index}-recommendation-card` }
          >
            <p
              data-testid={ `${index}-recommendation-title` }
            >
              { strMeal }
            </p>
            <img
              src={ strMealThumb }
              alt={ strMeal }
            />
          </div>
        )))}

          </section>
          {buttonStart && (
            <button
              data-testid="start-recipe-btn"
              className="buttonStart"
              type="button"
              onClick={ handleStartRecipe }
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
