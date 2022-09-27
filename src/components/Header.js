import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const urlWithoutBar = pathname.replaceAll('/', '');
  const withoutTrace = urlWithoutBar.replaceAll('-', ' ');
  const split = withoutTrace.split(' ');
  const titleOfPage = split
    .map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');

  if (urlWithoutBar === 'profile'
  || urlWithoutBar === 'done-recipes'
  || urlWithoutBar === 'favorite-recipes') {
    return (
      <div>
        <div data-testid="page-title">{titleOfPage}</div>
        <Link to="/profile">
          <img
            alt="profileIcon"
            src={ profileIcon }
            data-testid="profile-top-btn"
          />
        </Link>
      </div>

    );
  }
  return (
    <div>
      <div data-testid="page-title">{titleOfPage}</div>
      <Link to="/profile">
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
