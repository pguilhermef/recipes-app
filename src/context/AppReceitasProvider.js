import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  fetchApiMeals,
  fetchApiDrinks,
  fetchApiMealsFilters,
  fetchApiDrinksFilters,
  fetchApiMealsFiltered,
  fetchApiDrinksFiltered,
} from './Api';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [pathname, setPathname] = useState();
  const [filteredList, setfilteredList] = useState();
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealsToFilter, setMealsToFilter] = useState([]);
  const [drinksToFilter, setDrinksToFilter] = useState([]);
  const [mealsFilterButtons, setMealsFilterButtons] = useState([]);
  const [drinksFilterButtons, setDrinksFilterButtons] = useState([]);
  const [toFilterMeals, setToFilterMeals] = useState('');
  const [toFilterDrinks, setToFilterDrinks] = useState('');
  const [foodById, setFoodById] = useState();
  const [arrayOfIngredients, setArrayOfIngredients] = useState([]);

  const addEmail = useCallback((value) => {
    setLoginEmail(value);
  }, []);

  const fetchIngredientsAPIs = useCallback(async (ingredient, typeOfFood) => {
    const url = `https://www.the${typeOfFood}db.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(url);
    const result = await response.json();
    if (typeOfFood === 'meal') {
      setMealsToFilter(result.meals);
      setfilteredList(result);
    } else if (typeOfFood === 'cocktail') {
      setDrinksToFilter(result.drinks);
      setfilteredList(result);
    }
  }, []);

  const fetchNameAPIs = useCallback(async (name, typeOfFood) => {
    const url = `https://www.the${typeOfFood}db.com/api/json/v1/1/search.php?s=${name}`;
    const response = await fetch(url);
    const result = await response.json();
    if (typeOfFood === 'meal') {
      setMealsToFilter(result.meals);
      setfilteredList(result);
    } else if (typeOfFood === 'cocktail') {
      setDrinksToFilter(result.drinks);
      setfilteredList(result);
    }
  }, []);

  const fetchFirstLeatterAPIs = useCallback(async (firstLeatter, typeOfFood) => {
    const url = `https://www.the${typeOfFood}db.com/api/json/v1/1/search.php?f=${firstLeatter}`;
    const response = await fetch(url);
    const result = await response.json();
    if (typeOfFood === 'meal') {
      setMealsToFilter(result.meals);
      setfilteredList(result);
    } else if (typeOfFood === 'cocktail') {
      setDrinksToFilter(result.drinks);
      setfilteredList(result);
    }
  }, []);

  const passPathName = useCallback((pathnameParam) => {
    setPathname(pathnameParam);
  }, []);
  useEffect(() => {
    const requestApi = async () => {
      setMeals(await fetchApiMeals());
      setDrinks(await fetchApiDrinks());
      setMealsFilterButtons(await fetchApiMealsFilters());
      setDrinksFilterButtons(await fetchApiDrinksFilters());
    };
    requestApi();
  }, []);

  const requestAPIbyID = useCallback(async (id, typeOfFood) => {
    const url = `https://www.the${typeOfFood}db.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    const result = await response.json();
    let ingredients = [];
    if (typeOfFood === 'meal') {
      setFoodById(result.meals[0]);
      ingredients = Object.entries(result.meals[0])
        .filter((e) => e[0].includes('strIngredient'))
        .map((e) => e[1])
        .filter((e) => e !== null && e.length > 0);
    } else if (typeOfFood === 'cocktail') {
      setFoodById(result.drinks[0]);
      ingredients = Object.entries(result.drinks[0])
        .filter((e) => e[0].includes('strIngredient'))
        .map((e) => e[1])
        .filter((e) => e !== null && e.length > 0);
    }

    setArrayOfIngredients(ingredients);
  }, []);

  useEffect(() => {
    setMealsToFilter(meals);
    setDrinksToFilter(drinks);
  }, [meals, drinks]);

  useEffect(() => {
    const requestApi = async () => {
      if (!toFilterMeals.length) return setMealsToFilter(meals);
      setMealsToFilter(await fetchApiMealsFiltered(toFilterMeals));
    };
    requestApi();
  }, [toFilterMeals, meals]);

  useEffect(() => {
    const requestApi = async () => {
      if (!toFilterDrinks.length) return setDrinksToFilter(drinks);
      setDrinksToFilter(await fetchApiDrinksFiltered(toFilterDrinks));
    };
    requestApi();
  }, [toFilterDrinks, drinks]);

  const contextValue = useMemo(() => ({
    pathname,
    filteredList,
    fetchIngredientsAPIs,
    fetchNameAPIs,
    fetchFirstLeatterAPIs,
    passPathName,
    addEmail,
    loginEmail,
    meals,
    drinks,
    mealsToFilter,
    drinksToFilter,
    mealsFilterButtons,
    drinksFilterButtons,
    setToFilterMeals,
    setToFilterDrinks,
    toFilterMeals,
    toFilterDrinks,
    requestAPIbyID,
    foodById,
    arrayOfIngredients,
  }), [
    pathname,
    filteredList,
    fetchIngredientsAPIs,
    fetchNameAPIs,
    fetchFirstLeatterAPIs,
    passPathName,
    addEmail,
    loginEmail,
    meals,
    drinks,
    mealsToFilter,
    drinksToFilter,
    mealsFilterButtons,
    drinksFilterButtons,
    setToFilterMeals,
    setToFilterDrinks,
    toFilterMeals,
    toFilterDrinks,
    requestAPIbyID,
    foodById,
    arrayOfIngredients,
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
