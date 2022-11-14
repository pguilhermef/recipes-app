import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/index.css';

function Footer() {
  return (
    <nav
      data-testid="footer"
      className="navbar fixed-bottom"
      style={ { backgroundColor: '#421d1d' } }
    >
      <div
        className="container-fluid justify-content-evenly"
      >
        <Link to="/drinks" className="nav-link active">
          <img
            src={ drinkIcon }
            alt="drinkIcon"
            data-testid="drinks-bottom-btn"
            style={ { filter: 'invert(100%)' } }
          />
        </Link>
        <Link to="/meals" className="nav-link">
          <img
            src={ mealIcon }
            alt="mealIcon"
            data-testid="meals-bottom-btn"
            style={ { filter: 'invert(100%)' } }
          />
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
