import React, { useEffect, useState } from 'react';
import DoneRecipesCard from '../components/DoneRecipesCard';
import Header from '../components/Header';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    function getLocalStorage() {
      const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
      setDoneRecipes(getDoneRecipes);
    }
    getLocalStorage();
  }, []);

  const filterRecipes = (item) => {
    if (filter !== '') {
      return filter === item.type;
    }
    return true;
  };

  return (
    <section>
      <Header title="Done Recipes" />
      <div>
        <dir>
          <button
            data-testid="filter-by-all-btn"
            type="button"
            onClick={ () => setFilter('') }
          >
            All
          </button>
          <button
            data-testid="filter-by-meal-btn"
            type="button"
            onClick={ () => setFilter('meal') }
          >
            Meals
          </button>
          <button
            data-testid="filter-by-drink-btn"
            type="button"
            onClick={ () => setFilter('drink') }
          >
            Drinks
          </button>
        </dir>
        <div>
          {doneRecipes && (
            doneRecipes.filter((item) => filterRecipes(item)).map((recipe, index) => (
              recipe.type === 'meal' ? (
                <DoneRecipesCard
                  key={ index }
                  id={ recipe.id }
                  image={ recipe.image }
                  category={ recipe.category }
                  nationality={ recipe.nationality }
                  recipeName={ recipe.name }
                  doneDate={ recipe.doneDate }
                  tagName={ recipe.tags }
                  index={ index }
                  mealOrDrink="meal"
                />
              ) : (
                <DoneRecipesCard
                  key={ index }
                  id={ recipe.id }
                  image={ recipe.image }
                  alcoholic={ recipe.alcoholicOrNot }
                  recipeName={ recipe.name }
                  doneDate={ recipe.doneDate }
                  index={ index }
                  tagName={ recipe.tags }
                  mealOrDrink="drink"
                />
              )
            )))}
        </div>
      </div>
    </section>
  );
}

export default DoneRecipes;
