import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';

function Meals({ history }) {
  const { passPathName, filteredList } = useContext(AppReceitasContext);
  useEffect(() => {
    passPathName(history.location.pathname);
  }, [passPathName, history]);

  useEffect(() => {
    const specificFood = () => {
      if (filteredList !== undefined && filteredList.meals.length === Number('1')) {
        const { meals } = filteredList;
        history.push(`/meals/${meals[0].idMeal}`);
      }
    };

    specificFood();
  }, [filteredList, history]);

  return (
    <div>
      <Header />
      Meals
      <Footer />
    </div>
  );
}

Meals.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Meals;
