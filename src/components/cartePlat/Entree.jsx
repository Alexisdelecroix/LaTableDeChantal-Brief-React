import React from 'react';
import MyHeader from '../header/Header';
import './platStyle.css';

import { v4 as uuidv4 } from "uuid";


export default function Entree() {

    const Entree = [
        {
          id: uuidv4,
          title: "Filet de Saumon fumée",
          text: "Viens gouter notre saumon",
          image: `https://cdn.shopify.com/s/files/1/2390/5583/products/Filet_saumon_500g_740x.jpg?v=1579011660`,
          alt: "",
          prix: "9.99€"
        },
    
        {
          id: uuidv4,
          title: "Salade de mangue verte",
          text: "Pour donner un petit côté ensoleillé",
          image: `https://resize-elle.ladmedia.fr/r/300,386,center-middle,forcey,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/salade-de-mangue-verte-1162376/13603372-6-fre-FR/Salade-de-mangue-verte.jpg`,
          alt: "",
          prix: "7.99€"
        },
    
        {
          id: uuidv4,
          title: "Terrine de sanglier",
          text: "Une recette traditionnnelle pour les inconditionnels des gibiers",
          image: `https://resize-elle.ladmedia.fr/r/300,386,center-middle,forcey,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/la-terrine-de-sanglier-a-l-ancienne-2078428/22054892-2-fre-FR/La-terrine-de-sanglier-a-l-ancienne.jpg`,
          alt: "",
          prix: "8.99€"
        },
        {
          id: uuidv4,
            title: "Bouillon de poireau",
            text: "Servis avec du quinoa ou sarrasin",
            image: `https://resize-elle.ladmedia.fr/r/300,386,center-middle,forcey,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/bouillon-de-poireaux-3972213/95729060-1-fre-FR/Bouillon-de-poireaux.jpg`,
            alt: "",
            prix: "6.99€"
          },
          {
            id: uuidv4,
            title: "Beignets de pommes de terre",
            text: "Ces galettes sont aussi appelées rösties",
            image: `https://resize-elle.ladmedia.fr/r/300,386,center-middle,forcey,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/beignets-de-pommes-de-terre-de-ma-grand-mere-2068314/21707372-2-fre-FR/Beignets-de-pommes-de-terre-de-ma-grand-mere.jpg`,
            alt: "",
            prix: "6.99€"
          }
      ];

    return (
        
        <div className='conteneur'>
            
        {Entree.map((donnees) => {
            return (
             
                <div className="card-entree">
                    <h1>{donnees.title}</h1>
                   
                    <div className="image">
                    <img src={donnees.image} alt={donnees.alt} />
                     <p>{donnees.text}</p>
                     <p>{donnees.prix}</p>
                    </div>
                    </div>
                  
            );
        })}
        </div>
    )
}