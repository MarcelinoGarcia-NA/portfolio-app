import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';
import { userLocal } from '../../services/auth';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Home() {

  
  
    return (
      <div class="home">
         <div class="bloco-frase">
        
        </div>
        <div class="bloco-noticia">
          
        </div>
        <div class="bloco-Amigos">
            <h1>Amigos</h1>
        </div>
      </div>
     
    );
  
}

