import React from "react";
import Myheader from "../components/header/Header";
import MyBoisson from "../components/cartePlat/Boisson";
import MyFooter from "../components/footer/Footer";

export default function Boisson() {
  return (
    <main>
      <Myheader />
      <section>
        <article className="conteneur">
        <MyBoisson />
        </article>
      </section>
      <MyFooter />
    </main>
  );
}
