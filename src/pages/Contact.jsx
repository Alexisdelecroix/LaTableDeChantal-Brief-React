import React from "react";
import Myheader from "../components/header/Header";
import MyContact from "../components/formulaire/Formulaire";
import MyFooter from "../components/footer/Footer";
import MyMaps from "../components/formulaire/Maps";


export default function Plat() {
  return (
    <main>
      <Myheader />
      <section className="titre-plat">
        <h1>Nous contacter</h1>
      <MyContact />
      </section>
      <MyFooter />
    </main>
  );
}
