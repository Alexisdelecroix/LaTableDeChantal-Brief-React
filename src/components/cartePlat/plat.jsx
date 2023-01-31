import React from 'react';
import MyHeader from '../header/Header';
import './platStyle.css';

import Entree from './DataPlat';


export default function Plat() {

      const Plat = [
        {
          id: 1,
          title: "",
          text: "",
          image: ``,
          alt: "",
        },
    
        {
          id: 1,
          title: "",
          text: "",
          image: ``,
          alt: "",
        },
    
        {
            id: 1,
            title: "",
            text: "",
            image: ``,
            alt: "",
          },

          {
            id: 1,
            title: "",
            text: "",
            image: ``,
            alt: "",
          },
      ];

    return (
        <div className='conteneur'>
        {Plat.map((donnees) => {
       
            return (
               
                <div key={donnees.id} className="card-plat">
                    <h1>{donnees.title}</h1>
                    <img src={donnees.image} alt={donnees.alt} />
                    </div>
                  
            );
        })}

{/* <div className='conteneur'>
{Plat.map((donnees) => {
       
       return (
           <div key={donnees.id} className="card-plat">
               <h1>{donnees.title}</h1>
               <img src={donnees.image} alt={donnees.alt} />
               </div>
             
       );
       
   })}
    */}
        </div>
        
    )
}