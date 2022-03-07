
import '../../materialize/css/materialize.css'
import '../Menu/style.css';
import api from '../../services/api';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, userLocal } from '../../services/auth';

export default function Menu() {
    const TOKEN_KEY = "@PORTIFOLIO/token";
    function logoutMenu() {
        if (JSON.parse(localStorage.getItem(TOKEN_KEY) != null)) {
            logout();
        }
    }
        return (
            <div >
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <nav>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo">
                            <Link to="/">
                                <h5 class="title-page">PORTIFÓLIO COMUNIDADE</h5>
                            </Link>
                        </a>
                      
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <Link to="/view">
                                     <i>View</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/update">
                                     <i>Update</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <a id="btn-login-menu" class="waves-effect waves-light btn-small" onClick={logoutMenu}>
                                        <i class="large material-icons">exit_to_app</i>
                                    </a>
                                </Link>
                            </li>
                        </ul>
    
                    </div>
                </nav>
                
            </div>
        );
    
}

