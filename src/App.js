import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './components/FavoriteRecipes';
import AppReceitasProvider from './context/AppReceitasProvider';
import Recipes from './pages/Recipes';
import RecipeInProgress from './components/RecipeInProgress';
import RecipesDetails from './pages/RecipesDetails';

function App() {
  return (
    <AppReceitasProvider>
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />

        <Route
          exact
          path="/meals"
          component={ Recipes }
        />

        <Route
          exact
          path="/meals/:id"
          component={ RecipesDetails }
        />

        <Route
          exact
          path="/meals/:id/in-progress"
          component={ RecipeInProgress }
        />

        <Route
          exact
          path="/drinks"
          component={ Recipes }
        />

        <Route
          exact
          path="/drinks/:id"
          component={ RecipesDetails }
        />

        <Route
          exact
          path="/drinks/:id/in-progress"
          component={ RecipeInProgress }
        />

        <Route
          exact
          path="/profile"
          component={ Profile }
        />

        <Route
          exact
          path="/done-recipes"
          component={ DoneRecipes }
        />

        <Route
          exact
          path="/favorite-recipes"
          component={ FavoriteRecipes }
        />
      </Switch>
    </AppReceitasProvider>
  );
}

export default App;
