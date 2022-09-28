import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import AppReceitasContext from '../context/AppReceitasContext';

function Drinks({ history }) {
  const { passPathName, filteredList } = useContext(AppReceitasContext);
  useEffect(() => {
    passPathName(history.location.pathname);
  }, [passPathName, history.location.pathname]);

  useEffect(() => {
    const specificFood = () => {
      if (filteredList !== undefined && filteredList.drinks.length === Number('1')) {
        const { drinks } = filteredList;
        history.push(`/drinks/${drinks[0].idDrink}`);
      }
    };
    specificFood();
  }, [filteredList, history]);

  return (
    <div>
      <Header />
      Drinks
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Drinks;
