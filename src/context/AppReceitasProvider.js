import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  fetchApiMeals,
  fetchApiDrinks,
  fetchApiMealsFilters,
  fetchApiDrinksFilters,
} from './Api';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealsToFilter, setMealsToFilter] = useState([]);
  const [drinksToFilter, setDrinksToFilter] = useState([]);
  const [mealsFilterButtons, setMealsFilterButtons] = useState([]);
  const [drinksFilterButtons, setDrinksFilterButtons] = useState([]);

  const addEmail = useCallback((value) => {
    setLoginEmail(value);
  }, []);

  // Quando rendenizado, é aqui que devem ser feitas todas as requisições à API's!
  useEffect(() => {
    const requestApi = async () => {
      setMeals(await fetchApiMeals());
      setDrinks(await fetchApiDrinks());
      setMealsFilterButtons(await fetchApiMealsFilters());
      setDrinksFilterButtons(await fetchApiDrinksFilters());
    };
    requestApi();
  }, []);

  useEffect(() => {
    setMealsToFilter(meals);
    setDrinksToFilter(drinks);
  }, [meals, drinks]);

  const contextValue = useMemo(() => ({
    addEmail,
    loginEmail,
    meals,
    drinks,
    mealsToFilter,
    drinksToFilter,
    mealsFilterButtons,
    drinksFilterButtons,
  }), [
    addEmail,
    loginEmail,
    meals,
    drinks,
    mealsToFilter,
    drinksToFilter,
    mealsFilterButtons,
    drinksFilterButtons,
  ]);

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
