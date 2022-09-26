import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import AppReceitasProvider from './context/AppReceitasProvider';
import Login from './components/Login';
import Meals from './components/Meals';

function App() {
  return (
    <AppReceitasProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
      </Switch>
    </AppReceitasProvider>
  );
}

export default App;
