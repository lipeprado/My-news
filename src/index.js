import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Recentes from './components/Recentes.js';
import Popular from './components/Popular.js';
import ListaNews from './components/ListaNews.js';

import './index.css';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/recentes" component={Recentes}/>
        <Route path="/popular" component={Popular}/>
        <IndexRoute component={ListaNews}/>
      </Route>
    </Router>,
  document.getElementById('root')
);
