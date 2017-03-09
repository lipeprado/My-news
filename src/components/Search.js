import React, { Component } from 'react';
import './css/Search.css';

import SearchForm from './SearchForm.js';


class Search extends Component {
  render() {
    return (
      <div className="search container">
          <h2>Busque por Noticias!</h2>
          <SearchForm/>
      </div>
    );
  }
}

export default Search;
