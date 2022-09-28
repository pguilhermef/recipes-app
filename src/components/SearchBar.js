import React, { useState, useContext } from 'react';
import AppReceitasContext from '../context/AppReceitasContext';

function SearchBar() {
  const [value, setValue] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const { fetchIngredientsAPIs,
    fetchNameAPIs, fetchFirstLeatterAPIs } = useContext(AppReceitasContext);

  const handleClick = () => {
    switch (value) {
    case 'ingredient':
      fetchIngredientsAPIs(valueSearch);
      break;
    case 'name':
      fetchNameAPIs(valueSearch);
      break;
    case 'firstLeatter':
      if (valueSearch.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      fetchFirstLeatterAPIs(valueSearch);
      break;
    default:
      break;
    }
    return ('oi');
  };

  const handleChange = ({ target }) => {
    setValue(target.id);
  };

  return (
    <div>
      <input
        type="text"
        name="searchBar"
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
