import React from "react";
import Myheader from "../components/header/Header";
import MyBoisson from "../components/cartePlat/Boisson";
import MyFooter from "../components/footer/Footer";

export default function Boisson() {
  return (
    <main>
      <Myheader />
      <section className="titre-plat">
        <h1>Les boissons</h1>
        <article className="conteneur-plat">
        <MyBoisson />
        </article>
      </section>
      <MyFooter />
    </main>
  );
}
