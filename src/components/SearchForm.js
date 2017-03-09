import React, { Component } from 'react';
import './css/SearchForm.css';

class SearchForm extends Component {
    render() {
        return (
            <div className="searchForm">
                <form className="navbar-form">
                    <div className="form-group wrapForm col-md-8">
                        <input type="text" className="form-control inputForm" placeholder="Buscar" />
                    </div>
                        <button type="submit" className="btn btn-default col-md-4">Buscar</button>
                    </form>
                </div>
            );
        }
    }

    export default SearchForm;
