import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import AppReceitasContext from '../context/AppReceitasContext';
import Unfavorite from '../images/whiteHeartIcon.svg';
import Favorite from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../styles/RecipesInProgress.css';

function RecipeInProgress({ location: { pathname } }) {
  const history = useHistory();
  const { requestAPIbyID, foodById, arrayOfIngredients } = useContext(AppReceitasContext);
  const [ingredientsProgress, setIngredientsProgress] = useState([]);
  const [linkCopiedAlert, setLinkCopiedAlert] = useState(false);
  const [favoriteFood, setFavoriteFood] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [ifFinishButtonIsDisable, setIfFinishButtonIsDisable] = useState(true);
  const [handlePathnameToDisplay, setHandlePathnameToDisplay] = useState({
    name: '',
    thumb: '',
  });
  const idFood = pathname.split('/')[2];
  const typeOfFood = pathname.split('/')[1];
  const localStorageName = 'Food Progress';
  const localStorageFAvoriteName = 'favoriteRecipes';
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
      setFavoriteFood(JSON.parse(localStorage.getItem(localStorageFAvoriteName)));
    } else {
      setIngredientsProgress([]);
      setFavoriteFood([]);
    }
  }, [foodById, setIsFavorite]);

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
    const ifIsFavorite = () => {
      const localStorageOfFavorite = favoriteFood;
      if (localStorageOfFavorite !== null) {
        const verification = localStorageOfFavorite.some((e) => e.id === idFood);
        return verification;
      }
      return false;
    };
    if (foodById !== undefined && foodById !== []) {
      localStorage.setItem(localStorageName, JSON.stringify(ingredientsProgress));
      localStorage.setItem(localStorageFAvoriteName, JSON.stringify(favoriteFood));
      setIsFavorite(ifIsFavorite());
    }
    if (ingredientsProgress !== null
      && ingredientsProgress.length === arrayOfIngredients.length) {
      setIfFinishButtonIsDisable(false);
    } else {
      setIfFinishButtonIsDisable(true);
    }
  }, [ingredientsProgress, foodById, favoriteFood,
    setIsFavorite, idFood, setIfFinishButtonIsDisable, arrayOfIngredients]);

  const handleShare = () => {
    const foodURL = window.location.href.split('/in-progress');
    clipboardCopy(foodURL[0]);
    global.alert('Link copied!');
    setLinkCopiedAlert(true);
  };

  const handleFavoriteFood = () => {
    const itemToFavorite = {
      id: idFood,
      type: typeOfFood === 'meals' ? 'meal' : 'drink',
      nationality: foodById.strArea ? foodById.strArea : '',
      category: foodById.strCategory ? foodById.strCategory : '',
      alcoholicOrNot: foodById.strAlcoholic ? foodById.strAlcoholic : '',
      name: foodById[name],
      image: foodById[thumb],
    };
    if (isFavorite === false && favoriteFood === null) {
      setIsFavorite(true);
      setFavoriteFood([itemToFavorite]);
    } else if (isFavorite === false && favoriteFood !== null) {
      setIsFavorite(true);
      setFavoriteFood((prevFavoriteFood) => [...prevFavoriteFood, itemToFavorite]);
    } else if (isFavorite === true) {
      setIsFavorite(false);
      const removeFavoriteFood = favoriteFood.filter((e) => e.id !== itemToFavorite.id);
      console.log(removeFavoriteFood);
      setFavoriteFood(removeFavoriteFood);
    }
  };

  const handleFinishRecipe = () => {
    history.push('/done-recipes');
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
              disabled={ ifFinishButtonIsDisable }
              onClick={ handleFinishRecipe }
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
