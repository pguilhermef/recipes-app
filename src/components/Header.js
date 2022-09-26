import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const urlWithoutBar = pathname.replaceAll('/', '');
  const titleOfPage = title[0].toUpperCase() + urlWithoutBar.substring(1);

  return (
    <div>
      <div data-testid="page-title">{titleOfPage}</div>
      <Link to="/Profile">
        <img
          alt="profileIcon"
          src={ profileIcon }
          data-testid="profile-top-btn"
        />
      </Link>

      <img
        alt="searchIcon"
        src={ searchIcon }
        data-testid="search-top-btn"
      />
    </div>
  );
}

export default Header;
