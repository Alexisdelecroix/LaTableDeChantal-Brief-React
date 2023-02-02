import React from 'react';
import MyHeader from '../header/Header';
import '../cartePlat/platStyle.css'

import { v4 as uuidv4 } from "uuid";
import DataPlat from '../cartePlat/DataPlat'


export default function Boisson() {
 
    const listData =DataPlat.map(donnees => {
      if (donnees.categorie === 4)
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
  
  return listData;
  }
