import React, { useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from './Header';
import Favorite from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../styles/index.css';

function FavoriteRecipes() {
  const [favoriteFoods, setFavoriteFood] = useState();
  const [linkCopied, setLinkCopied] = useState(false);
  const localStorageFAvoriteName = 'favoriteRecipes';
  const favoriteLocalStorage = JSON.parse(localStorage.getItem(localStorageFAvoriteName));

  useEffect(() => {
    setFavoriteFood(favoriteLocalStorage);
  }, []);

  const shareRecipe = ({ target }) => {
    const { id, className } = target;
    console.log(target);
    const twoSeconds = 2000;
    setLinkCopied(true);
    clipboardCopy(`http://localhost:3000/${className}s/${id}`);
    setTimeout(() => { setLinkCopied(false); }, twoSeconds);
  };
  useEffect(() => () => clearTimeout(), []);

  const handleFavoriteFood = ({ target: { id } }) => {
    const filterFavoriteFoods = favoriteFoods.filter((e) => e.id !== id);
    localStorage.setItem(localStorageFAvoriteName, JSON.stringify(filterFavoriteFoods));
    setFavoriteFood(filterFavoriteFoods);
  };

  const handleFilter = ({ target: { id } }) => {
    const filterFavoriteFoods = favoriteLocalStorage.filter((e) => e.type === id);
    setFavoriteFood(filterFavoriteFoods);
  };

  const handleFilterAll = () => {
    setFavoriteFood(favoriteLocalStorage);
  };

  return (
    <>
      <Header />
      <button
        type="button"
        id="drink"
        data-testid="filter-by-drink-btn"
        onClick={ (event) => handleFilter(event) }
      >
        Drinks
      </button>
      <button
        type="button"
        id="meal"
        data-testid="filter-by-meal-btn"
        onClick={ (event) => handleFilter(event) }
      >
        Meals
      </button>
      <button
        type="button"
        id="meal"
        data-testid="filter-by-all-btn"
        onClick={ handleFilterAll }
      >
        All
      </button>
      { favoriteFoods
        ? favoriteFoods
          .map(({ id, name, nationality, category, type, alcoholicOrNot, image }, i) => (
            <div key={ id }>
              <Link
                to={ `/${type}s/${id}` }
                data-testid={ `${i}-horizontal-name` }
              >
                { name }
              </Link>
              <h2
                data-testid={ `${i}-horizontal-top-text` }
              >
                { nationality }
                {' '}
                -
                {' '}
                { category }
              </h2>
              <h2>{ type }</h2>
              <h2 data-testid={ `${i}-horizontal-top-text` }>{ alcoholicOrNot }</h2>
              <Link to={ `/${type}s/${id}` }>
                <img
                  className="recipe-image"
                  data-testid={ `${i}-horizontal-image` }
                  src={ image }
                  alt={ name }
                />
              </Link>
              <button
                data-testid={ `${i}-horizontal-share-btn` }
                type="button"
                src={ shareIcon }
                onClick={ (event) => shareRecipe(event) }
              >
                <img
                  id={ id }
                  className={ type }
                  src={ shareIcon }
                  alt="share icon"
                />
              </button>
              { linkCopied && <p>Link copied!</p> }
              <button
                type="button"
                onClick={ handleFavoriteFood }
              >
                <img
                  src={ Favorite }
                  id={ id }
                  data-testid={ `${i}-horizontal-favorite-btn` }
                  alt="icone"
                />
              </button>
            </div>
          ))
        : (<span>No Favorite Food</span>)}
    </>
  );
}

export default FavoriteRecipes;
