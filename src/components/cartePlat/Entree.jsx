import React from 'react';
import MyHeader from '../header/Header';
import './platStyle.css';


export default function Entree() {

    const Entree = [
        {
          id: 1,
          title: "Filet de Saumon",
          text: "",
          image: ``,
          alt: "",
        },
    
        {
          id: 1,
          title: "Feuilletés",
          text: "Pour donner un petit côté oriental et ensoleillé",
          image: ``,
          alt: "",
        },
    
        {
          id: 1,
          title: "Terrine",
          text: "",
          image: ``,
          alt: "",
        },
        {
            id: 1,
            title: "Tarte au poireau",
            text: "",
            image: ``,
            alt: "",
          },
      ];

    return (
        
        <div className='conteneur'>
            
        {Entree.map((donnees) => {
       
            return (
               
                <div key={donnees.id} className="card-entree">
                    <h1>{donnees.title}</h1>
                    <p>{donnees.text}</p>
                    <img src={donnees.image} alt={donnees.alt} />
                    </div>
                  
            );
        })}
        </div>
    )
}