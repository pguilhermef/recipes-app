import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import AppReceitasContext from '../context/AppReceitasContext';
import Favorite from '../images/whiteHeartIcon.svg';
import Unfavorite from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../styles/RecipesInProgress.css';

function RecipeInProgress({ location: { pathname } }) {
  const { requestAPIbyID, foodById, arrayOfIngredients } = useContext(AppReceitasContext);
  const [ingredientsProgress, setIngredientsProgress] = useState([]);
  const [linkCopiedAlert, setLinkCopiedAlert] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [handlePathnameToDisplay, setHandlePathnameToDisplay] = useState({
    name: '',
    thumb: '',
  });
  const idFood = pathname.split('/')[2];
  const typeOfFood = pathname.split('/')[1];
  const localStorageName = 'Food Progress';
  const { name, thumb } = handlePathnameToDisplay;

  useEffect(() => {
    const checkPathname = () => {
      if (typeOfFood === 'meals') {
        requestAPIbyID(idFood, 'meal');
        setHandlePathnameToDisplay({
          name: 'strMeal',
          thumb: 'strMealThumb',
        });
      } if (typeOfFood === 'drinks') {
        requestAPIbyID(idFood, 'cocktail');
        setHandlePathnameToDisplay('Drink');
        setHandlePathnameToDisplay({
          name: 'strDrink',
          thumb: 'strDrinkThumb',
        });
      }
    };
    checkPathname();
  }, [idFood, requestAPIbyID, typeOfFood, foodById]);

  useEffect(() => {
    if (foodById !== undefined) {
      setIngredientsProgress(JSON.parse(localStorage.getItem(localStorageName)));
    } else {
      setIngredientsProgress([]);
    }

    if (JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      console.log();
      // setIsFavorite(JSON.parse(localStorage
      //   .getItem('favoriteRecipes').includes(foodById[name])));
    }
  }, [foodById, setIsFavorite, name]);

  const saveProgress = ({ target }) => {
    if (target.checked === true && ingredientsProgress === null) {
      setIngredientsProgress([target.id]);
    }
    if (target.checked === true && ingredientsProgress !== null) {
      setIngredientsProgress((prevIngredintsProgress) => (
        [...prevIngredintsProgress, target.id]
      ));
    } if (target.checked === false) {
      const removeProgress = ingredientsProgress.filter((e) => e !== target.id);
      setIngredientsProgress(removeProgress);
    }
  };

  const ifIsChecked = (ingredient) => {
    const localStorageOfProgress = ingredientsProgress;
    if (localStorageOfProgress !== null) {
      const verification = localStorageOfProgress.some((e) => e === ingredient);
      return verification;
    }
    return false;
  };

  useEffect(() => {
    if (foodById !== undefined && foodById !== []) {
      localStorage.setItem(localStorageName, JSON.stringify(ingredientsProgress));
    }
  }, [ingredientsProgress, foodById]);

  const handleShare = () => {
    const foodURL = window.location.href.split('/in-progress');
    clipboardCopy(foodURL[0]);
    global.alert('Link copied!');
    setLinkCopiedAlert(true);
  };

  const handleFavoriteFood = () => {
    if (isFavorite === false) {
      // setStorage(
      //   'favoriteRecipes',
      //   JSON.stringify((prevfoodById) => [...prevfoodById, foodById]),
      // );
      setIsFavorite(true);
    } else if (isFavorite === true) {
      setIsFavorite(false);
    }
  };

  return (
    <div>
      { foodById !== undefined && (
        <div>
          <img
            data-testid="recipe-photo"
            src={ foodById[thumb] }
            alt={ foodById[name] }
            className="img-recipes"
          />
          <section>
            <h1
              data-testid="recipe-title"
              className="title-recipes"
            >
              { foodById[name] }
            </h1>
            <p
              data-testid="recipe-category"
              className="category-recipes"
            >
              {foodById.strCategory}
            </p>
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
            <p
              data-testid="instructions"
              className="Description-instruction"
            >
              { foodById.strInstructions }
            </p>
            {arrayOfIngredients && arrayOfIngredients
              .map((ingredient, index) => (
                <label
                  key={ ingredient }
                  data-testid={ `${index}-ingredient-step` }
                  htmlFor={ `ingrediente${index}` }
                >
                  <input
                    name={ `ingrediente${index}` }
                    id={ ingredient }
                    type="checkbox"
                    checked={ ifIsChecked(ingredient) }
                    onChange={ (event) => saveProgress(event) }
                  />
                  {ingredient}
                </label>
              ))}
            <button
              type="button"
              data-testid="finish-recipe-btn"
              className="finish-recipe-button"
            >
              Finalizar Receita
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

RecipeInProgress.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeInProgress;
