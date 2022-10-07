import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header />
      <span data-testid="profile-email">{userEmail && userEmail.email}</span>
      <section>
        <Link to="/done-recipes">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Logout
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
export default Profile;
