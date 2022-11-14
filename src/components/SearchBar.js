import React, { useState, useContext, useEffect } from 'react';
import AppReceitasContext from '../context/AppReceitasContext';

function SearchBar() {
  const [value, setValue] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const [typeOfFood, settypeOfFood] = useState();
  const { fetchIngredientsAPIs, filteredList,
    fetchNameAPIs, fetchFirstLeatterAPIs, pathname } = useContext(AppReceitasContext);

  useEffect(() => {
    const throwAlert = () => {
      if (filteredList !== undefined
        && (filteredList.drinks === null
        || filteredList.meals === null)) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
    };
    throwAlert();
  }, [filteredList]);

  const checkPathName = () => {
    if (pathname === '/meals') {
      settypeOfFood('meal');
    } if (pathname === '/drinks') {
      settypeOfFood('cocktail');
    }
  };

  const handleClick = () => {
    switch (value) {
    case 'ingredient':
      fetchIngredientsAPIs(valueSearch, typeOfFood);
      break;
    case 'name':
      fetchNameAPIs(valueSearch, typeOfFood);
      break;
    default:
      if (valueSearch.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      fetchFirstLeatterAPIs(valueSearch, typeOfFood);
      break;
    }
  };

  const handleChange = ({ target }) => {
    setValue(target.id);
    checkPathName();
  };

  return (
    <div>
      <input
        className="form-control"
        aria-label="Search"
        type="text"
        name="searchBar"
        data-testid="search-input"
        onChange={ (event) => setValueSearch(event.target.value) }
      />

      <label
        htmlFor="ingredients"
      >
        <input
          type="radio"
          name="search"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ (event) => handleChange(event) }
        />

        Ingredient
      </label>

      <label
        htmlFor="name"
      >
        <input
          type="radio"
          name="search"
          id="name"
          data-testid="name-search-radio"
          onChange={ (event) => handleChange(event) }
        />
        Nome
      </label>

      <label
        htmlFor="firstLeatter"
      >
        <input
          type="radio"
          name="search"
          id="firstLeatter"
          data-testid="first-letter-search-radio"
          onChange={ (event) => handleChange(event) }
        />
        Primeira Letra
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Procurar
      </button>
    </div>
  );
}

export default SearchBar;
