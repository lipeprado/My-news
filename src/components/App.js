import React, { Component } from 'react';
import './css/App.css';

// Components
import Nav from './Nav.js';
import Search from './Search.js';

var App = (props) => {
    return (
      <div className="App">
          <Nav/>
          <Search/>
          <div className="container">
              <div className="col-md-6">
                  {props.children}
            </div>
        </div>
      </div>
    );
}

module.exports =  App;
