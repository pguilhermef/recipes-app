import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import DrinksRecipes from '../components/DrinksRecipes';
import MealsRecipes from '../components/MealsRecipes';

export default function RecipesDetails(props) {
  const [recipeMealsDetails, setRecipeMealsDetails] = useState();
  const [recipeDrinksDetails, setRecipeDrinksDetails] = useState();

  const history = useHistory();
  const { location: { pathname } } = history;
  const { match } = props;
  const { params } = match;

  const fetchApiMealsDetails = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals;
  };

  const fetchApiDrinksDetails = async (id) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.drinks;
  };

  useEffect(() => {
    const setStateMeals = async () => {
      setRecipeMealsDetails(await fetchApiMealsDetails(params.id));
    };
    const setStateDrinks = async () => {
      setRecipeDrinksDetails(await fetchApiDrinksDetails(params.id));
    };
    if (pathname.includes('/meals/')) return setStateMeals();
    if (pathname.includes('/drinks/')) return setStateDrinks();
  }, [pathname, params.id]);

  return (
    <main>
      {recipeDrinksDetails
      && <DrinksRecipes value={ recipeDrinksDetails } />}
      {recipeMealsDetails
      && <MealsRecipes value={ recipeMealsDetails } />}
    </main>
  );
}

RecipesDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
