import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Drinks from './components/Drinks';
import Login from './components/Login';
import Meals from './components/Meals';
import Profile from './components/Profile';
import DoneRecipes from './components/DoneRecipes';
import FavoriteRecipes from './components/FavoriteRecipes';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />

      <Route
        exact
        path="/meals"
        component={ Meals }
      />

      <Route
        exact
        path="/drinks"
        component={ Drinks }
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
  );
}

export default App;
