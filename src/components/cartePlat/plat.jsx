import React from "react";
import MyHeader from "../header/Header";
import "./platStyle.css";

import DataPlat from "./DataPlat";

import { v4 as uuidv4 } from "uuid";

export default function Plat() {
  const listData = DataPlat.map((donnees, i) => {
    if (donnees.categorie === 2)
      return (
        <div key={i} className="card-plat">
          <h3>{donnees.title}</h3>
          <div className="image">
            <img src={donnees.image} alt={donnees.alt} />
            <p>{donnees.text}</p>
            <p>{donnees.prix}</p>
          </div>
        </div>
      );
  });

  return listData;
}
