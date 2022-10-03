import { useState, useEffect } from 'react';
import numbers from '../helpers/helpers';
import '../styles/index.css';

export default function MealsRecipes({ value }) {
  const maxRecommended = 6;
  const [recipeStart, setRecipeStart] = useState(true);
  const [mealsApi, setMealsApi] = useState();
  const [recommendedDrinks, setRecommendedDrinks] = useState();

  useEffect(() => {
    const getApiResult = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${value[0].idMeal}`);
      const result = await response.json();
      setMealsApi(result.meals[0]);
    };
    getApiResult();
  }, [value]);

  useEffect(() => {
    const fetchRecommendedDrinks = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const result = await response.json();
      setRecommendedDrinks(result.drinks);
    };
    fetchRecommendedDrinks();
  }, []);

  const handleStartRecipe = () => {
    setRecipeStart(true);
  };

  if (value) {
    return (
      value && (
        value.map((item) => (
          <main key={ item.strMeal }>
            <img
              alt={ item.strMeal }
              src={ item.strMealThumb }
              data-testid="recipe-photo"
            />
            <div data-testid="recipe-title">{item.strMeal}</div>
            <div data-testid="recipe-category">{item.strCategory}</div>
            <h3>Igredientes</h3>
            <ul>
              {mealsApi && numbers.map((i) => (
                mealsApi[`strIngredient${[i]}`])
                && (
                  <li
                    data-testid={ `${i - 1}-ingredient-name-and-measure` }
                    key={ mealsApi[`strIngredient${[i]}`] }
                  >
                    {mealsApi[`strIngredient${[i]}`]}
                    {mealsApi[`strMeasure${i}`]}
                  </li>
                ))}
            </ul>
            <h3 data-testid="instructions">{item.strInstructions}</h3>
            <iframe
              data-testid="video"
              width="360"
              height="270"
              title="youtube-video"
              src={ item.strYoutube.replace('watch?v=', 'embed/') }
            />
            <section className="carrousel">
              {recommendedDrinks
      && (recommendedDrinks.slice(0, maxRecommended)
        .map(({ strDrinkThumb, strDrink, idDrink }, index) => (
          <div
            className="carrouselChield"
            key={ idDrink }
            data-testid={ `${index}-recommendation-card` }
            style={ { width: '11rem' } }
          >
            <p
              data-testid={ `${index}-recommendation-title` }
            >
              { strDrink }
            </p>
            <img
              className="imgRecomendation"
              src={ strDrinkThumb }
              alt={ strDrink }
            />
          </div>
        )))}

            </section>
            <section>
              {recipeStart && (
                <button
                  className="buttonStart"
                  data-testid="start-recipe-btn"
                  type="button"
                  onClick={ handleStartRecipe }
                >
                  Start Recipe

                </button>
              )}
            </section>
          </main>)))
    );
  }
}
