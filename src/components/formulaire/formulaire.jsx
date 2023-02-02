import React from "react";
import MyHeader from "../header/Header";
import "./formulaireStyle.css";
import Mymap from "../formulaire/Maps";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Plat() {
  return (
    <section className="conteneurContact">
      <aside>
        <h3>Nos coordonnées</h3>
        <p>Adresse : 297 rue Chau. Fernaud Forest, 59200 Tourcoing</p>
        <p>Téléphone : 03 20 23 84 65</p>

        <Mymap />
      </aside>

      <form className="conteneurForm" action="">
        <h1>Formulaire de contact</h1>
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
            <label for="email">
              Email :<span>*</span>
            </label>
            <label for="title">
              Sujet :<span>*</span>
            </label>
          </div>
          <div className="position">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Jenna@gmail.fr"
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Votre titre"
              required
            />
          </div>
          <div className="positionArea">
            <label for="message">Votre message :</label> <br />
            <textarea type="text" name="message" rows="15" cols="70" />
          </div>
          <div className="position">
            <input type="submit" />
          </div>
        </fieldset>
      </form>
    </section>
  );
}
