import React, { Component } from 'react';
import './css/ListaNews.css';

import EachNews from './EachNews.js';


class ListaNews extends Component {
  render() {
    return (
      <div className="listaNews">
          <h3>Lista de Noticias</h3>
          <EachNews/>
      </div>
    );
  }
}

export default ListaNews;
