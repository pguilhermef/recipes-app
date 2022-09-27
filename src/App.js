import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Drinks from './components/Drinks';
import HeaderFunc from './components/Header';
import Meals from './components/Meals';
import Profile from './components/Profile';
import DoneRecipes from './components/DoneRecipes';
import FavoriteRecipes from './components/FavoriteRecipes';
import AppReceitasProvider from './context/AppReceitasProvider';

function App() {
  return (
    <AppReceitasProvider>
      <Switch>
        <Route
          exact
          path="/header"
          component={ HeaderFunc }
        />

        <Route
          exact
          path="/meals"
          component={ Meals }
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
    </AppReceitasProvider>
  );
}

export default App;
