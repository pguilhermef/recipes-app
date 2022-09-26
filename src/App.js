import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import AppReceitasProvider from './context/AppReceitasProvider';
import Login from './components/Login';
import Meals from './components/Meals';
import Drinks from './components/Drinks';
import Profile from './components/Profile';

function App() {
  return (
    <AppReceitasProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/meals/id:" component={ Login } />
        <Route exact path="/drinks/id:" component={ Login } />
        <Route exact path="/Profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ Login } />
        <Route exact path="/favorite-recipes" component={ Login } />
        done-recipes
      </Switch>
    </AppReceitasProvider>
  );
}

export default App;
