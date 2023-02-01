import React from "react";
import MyHeader from "../header/Header";
import "./platStyle.css";

import { v4 as uuidv4 } from "uuid";

export default function Plat() {
  const Plat = [
    {
      id: uuidv4,
      title: "Lasagnes",
      text: "Les bonnes lasagnes",
      image: `https://img.cuisineaz.com/660x660/2016/05/22/i87267-lasagnes-a-la-vraie-bolognaise.jpg`,
      alt: "",
      prix: "14.99€",
    },

    {
      id: uuidv4,
      title: "Raclette",
      text: "Avec son bon fromage alpin",
      image: `https://www.hervecuisine.com/wp-content/uploads/2017/12/recette-raclette.jpg.webp?x79635`,
      alt: "",
      prix: "19.99€",
    },

    {
      id: uuidv4,
      title: "Tarte au saumon",
      text: "Pour un petit peu de fraicheur",
      image: `https://assets.afcdn.com/recipe/20200219/107906_w1024h768c1cx2760cy1842.jpg`,
      alt: "",
      prix: "13.99€",
    },

    {
      id: uuidv4,
      title: "Moules-frites",
      text: "Pour l'air marin venez gouter nos moules",
      image: `https://sf1.viepratique.fr/wp-content/uploads/sites/2/2014/02/shutterstock_115952584.jpg`,
      alt: "",
      prix: "12.99€",
    },
    {
      id: uuidv4,
      title: "Jarrets d'agneau",
      text: "Spécialité vin rouge",
      image: `https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2019.2F10.2F03.2F63e66490-bc5a-416b-bb48-3dbdd514837c.2Ejpeg/422x316/quality/80/crop-from/center/focus-point/764%2C543/jarrets-d-agneau.jpeg`,
      alt: "",
      prix: "19.99€",
    },
  ];

  return (
    <div className="conteneur">
      {Plat.map((donnees) => {
        return (
          <div className="card-plat">
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
  );
}
