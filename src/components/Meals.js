import React, { Component } from 'react';
import Footer from './Footer';
import SearchBar from './SearchBar';

class Meals extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        Meals
        <Footer />
      </div>
    );
  }
}

export default Meals;
