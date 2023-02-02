import React, { useState } from 'react';
import MyHeader from '../header/Header';
import './platStyle.css';
import BtnSlider from '../slider/BtnSlider';


import { v4 as uuidv4 } from "uuid";
import DataPlat from './DataPlat';


export default function Entree() {
    const data =DataPlat.map(donnees => {
      if (donnees.categorie === 1)
    return (
        
            <div className="card-plat">
              <h3>{donnees.title}</h3>
              <div className="image">
                <img src={donnees.image} alt={donnees.alt} />
              <p>{donnees.text}</p>
              <p>{donnees.prix}</p>
              </div>
           </div>
            
    );
  })
  return data;
  }