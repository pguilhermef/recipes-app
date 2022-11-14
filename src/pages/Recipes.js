import React from 'react';
import { useHistory } from 'react-router-dom';
import Drinks from '../components/Drinks';
import Meals from '../components/Meals';

function Recipes() {
  const history = useHistory();
  const { location: { pathname } } = history;

  switch (pathname) {
  case '/drinks':
    return <Drinks />;
  default:
    return <Meals />;
  }
}

export default Recipes;
