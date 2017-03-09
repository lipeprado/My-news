import React, { Component } from 'react';
import './css/Nav.css';

import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <a className="navbar-brand" href="#">Brand</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Ver Noticias</IndexLink></li>
                            <li><IndexLink to="/recentes" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Recentes</IndexLink></li>
                            <li><IndexLink to="/popular" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Popular</IndexLink></li>
                        </ul>



                    </div>
                </div>
            </nav>

        );
    }
}

export default Nav;
