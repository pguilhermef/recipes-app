import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import numbers from '../helpers/helpers';
import Unfavorite from '../images/whiteHeartIcon.svg';
import Favorite from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../styles/index.css';

export default function MealsRecipes({ value }) {
  const maxRecommended = 6;
  const [isFavorite, setIsFavorite] = useState(false);
  const [buttonStart, setButtonStart] = useState(true);
  const [linkCopiedAlert, setLinkCopiedAlert] = useState(false);
  const [mealsApi, setMealsApi] = useState();
  const [recommendedDrinks, setRecommendedDrinks] = useState();

  const startSet = () => {
    const item = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!item || !item.meals) return setButtonStart(true);
    if (item.meals[value[0].idMeal]) return setButtonStart(false);
  };

  useEffect(() => {
    const getApiResult = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${value[0].idMeal}`);
      const result = await response.json();
      setMealsApi(result.meals[0]);
    };
    getApiResult();
    startSet();
  }, []);

  useEffect(() => {
    const fetchRecommendedDrinks = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const result = await response.json();
      setRecommendedDrinks(result.drinks);
    };
    fetchRecommendedDrinks();
  }, []);

  const handleStartRecipe = () => {
    setButtonStart(false);
  };

  const handleShare = () => {
    const foodURL = window.location.href;
    clipboardCopy(foodURL);
    global.alert('Link copied!');
    setLinkCopiedAlert(true);
  };

  const handleFavoriteFood = () => {
    if (isFavorite === false) {
      setIsFavorite(true);
    } if (isFavorite === true) {
      setIsFavorite(false);
    }
  };

  return (
    value && (
      value.map((item) => (
        <main key={ item.strMeal } className="meals-page adjust-menu-infos">
          {/* Imagem */}
          <img
            alt={ item.strMeal }
            src={ item.strMealThumb }
            data-testid="recipe-photo"
            className="img-fluid img-thumbnail mt-4 recipe-detail-thumbnail"
          />
          {/* Nome e Ingredientes */}
          <div className="text-light">
            <h3
              className="mt-2"
              data-testid="recipe-title"
            >
              {item.strMeal}
            </h3>
            <div
              data-testid="recipe-category"
            >
              <span>
                {item.strCategory}
              </span>
            </div>
            <div className="mt-2 container">
              <h3>Ingredientes:</h3>
              <ul className="list-group">
                {mealsApi && numbers.map((i) => (
                  mealsApi[`strIngredient${[i]}`])
                && (
                  <li
                    data-testid={ `${i - 1}-ingredient-name-and-measure` }
                    key={ mealsApi[`strIngredient${[i]}`] }
                    className="list-group-item"
                  >
                    {mealsApi[`strIngredient${[i]}`]}
                    {mealsApi[`strMeasure${i}`]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Modo de preparo */}
          <div className="container text-light glassmorphism">
            <h3 className="mt-2">Modo de preparo:</h3>
            <p data-testid="instructions">{item.strInstructions}</p>
          </div>
          {/* Vídeo Youtube */}
          <iframe
            data-testid="video"
            width="340"
            height="270"
            title="youtube-video"
            src={ item.strYoutube.replace('watch?v=', 'embed/') }
            className="ms-2"
          />
          {/* Recomendado */}
          <div className="text-light">
            <h3 className="container title-meals-details">Recommended:</h3>

            <div className="container-fluid">
              <div className="row flex-row flex-nowrap overflow-auto">
                {recommendedDrinks
              && (recommendedDrinks.slice(0, maxRecommended)
                .map(({ strDrinkThumb, strDrink, idDrink }, index) => (
                  <div
                    key={ idDrink }
                    className="glassmorphism me-1 mb-5"
                    data-testid={ `${index}-recommendation-card` }
                    style={ { width: '11rem' } }
                  >
                    <h5
                      className="mt-1"
                      data-testid={ `${index}-recommendation-title` }
                    >
                      { strDrink }
                    </h5>

                    <img
                      src={ strDrinkThumb }
                      alt={ strDrink }
                      className="card-img-top rounded img-thumbnail"
                    />

                  </div>
                )))}
              </div>
            </div>
          </div>

          {buttonStart ? (
            <Link to={ `${value[0].idMeal}/in-progress` }>
              <button
                data-testid="start-recipe-btn"
                className="btn buttonStart text-light"
                type="button"
                onClick={ handleStartRecipe }
                style={ { backgroundColor: '#421d1d' } }
              >
                Start Recipe

              </button>

            </Link>
          ) : (
            <button
              data-testid="start-recipe-btn"
              className="btn buttonStart text-light"
              type="button"
              onClick={ handleStartRecipe }
              style={ { backgroundColor: '#421d1d' } }
            >
              Continue Recipe

            </button>
          )}

          <button
            type="button"
            data-testid="share-btn"
            onClick={ handleShare }
          >
            <img
              src={ shareIcon }
              alt="shareButton"
            />
          </button>

          {linkCopiedAlert && (<span>Link copied!</span>)}

          <button
            type="button"
            onClick={ handleFavoriteFood }
          >
            { isFavorite
              ? <img src={ Favorite } data-testid="favorite-btn" alt="icone" />
              : <img src={ Unfavorite } data-testid="favorite-btn" alt="icone" />}
          </button>

        </main>)))
  );
}
