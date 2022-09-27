import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [meals, setMeals] = useState();
  const [drinks, setDrinks] = useState();
  const [mealsToFilter, setMealsToFilter] = useState();
  const [drinksToFilter, setDrinksToFilter] = useState();

  const addEmail = useCallback((value) => {
    setLoginEmail(value);
  }, []);

  const fetchMeals = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.meals);
    setMealsToFilter(data.meals);
  }, []);

  const fetchDrinks = useCallback(async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(url);
    const data = await response.json();
    setDrinks(data.drinks);
    setDrinksToFilter(data.drinks);
  }, []);

  const contextValue = useMemo(() => ({
    addEmail,
    loginEmail,
    meals,
    drinks,
    fetchMeals,
    fetchDrinks,
    mealsToFilter,
    drinksToFilter,
  }), [addEmail,
    loginEmail,
    meals,
    drinks,
    fetchMeals,
    fetchDrinks,
    mealsToFilter,
    drinksToFilter]);

  return (
    <AppReceitasContext.Provider
      value={ contextValue }
    >
      { children }
    </AppReceitasContext.Provider>
  );
}

AppReceitasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppReceitasProvider;
