import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const [showSearch, setShowSearch] = React.useState(false);
  const handleChangeShow = () => {
    setShowSearch(!showSearch);
  };

  const history = useHistory();
  const { location: { pathname } } = history;
  const urlWithoutBar = pathname.replaceAll('/', '');
  const withoutTrace = urlWithoutBar.replaceAll('-', ' ');
  const split = withoutTrace.split(' ');
  const titleOfPage = split
    .map((word) => word[0].toUpperCase() + word.substr(1)).join(' ');

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
      <button type="button" onClick={ handleChangeShow }>
        <img
          alt="searchIcon"
          src={ searchIcon }
          data-testid="search-top-btn"
        />
      </button>
      {showSearch && <SearchBar />}
    </div>
  );
}

export default Header;
