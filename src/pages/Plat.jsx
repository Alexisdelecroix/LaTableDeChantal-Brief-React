import React from "react";
import Myheader from "../components/header/Header";
import MyPlat from "../components/cartePlat/Plat";
import MyEntree from "../components/cartePlat/Entree";
import MyDessert from "../components/cartePlat/Dessert"
import MyFooter from "../components/footer/Footer";

import "../components/cartePlat/platStyle.css";

export default function Plat() {
  return (
    <main>
      <Myheader />
      <section>
      <h1>La carte des plats</h1>

      <h2>Nos entrées</h2>
      
     <article className="conteneur"> <MyEntree /></article>
      <h2>Nos plats</h2>
      <artcile className="conteneur"> <MyPlat /></artcile>
      <h2>Nos desserts</h2>
      <artcile className="conteneur"> <MyDessert /></artcile>
      <MyFooter />
      </section>
    </main>
  );
}
