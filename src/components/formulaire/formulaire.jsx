import React from "react";
import MyHeader from "../header/Header";
import "./formulaireStyle.css";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Plat() {
  return (
    <form className="conteneurForm" action="">
      <fieldset>
        <legend>Nous contacter</legend>
        <div className="position">
          <label for="prenom">
            Prénom:<span>*</span>
          </label>
          <label for="nom">
            Nom:<span>*</span>
          </label>
        </div>
        <div className="position">
          <input
            type="text"
            name="prenom"
            id="prenom"
            pattern="[A-Za-z]+"
            title="Le prénom ne peut contenir que des lettres."
            placeholder="Jenna"
            required
          ></input>
          <input
            type="text"
            name="nom"
            id="nom"
            pattern="[A-Za-z]+"
            title="Le nom ne peut contenir que des lettres."
            placeholder="Grande"
            required
          ></input>
        </div>
        <div className="position">
          <label for="email">Email :<span>*</span></label>
          <label for="title">Sujet :<span>*</span></label>
        </div>
        <div className="position">
          <input type="email" name="email" id="email" placeholder="Jenna@gmail.fr" required />
          <input type="text" name="title" placeholder="Votre titre" required/>
        </div>

        <label for="message">Votre message :</label> <br />
        <textarea type="text" name="message" rows="10" cols="50" /> 
        <input type="submit" />
      </fieldset>
    </form>

  );
}
