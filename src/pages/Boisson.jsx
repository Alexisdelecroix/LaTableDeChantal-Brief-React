import React from "react";
import Myheader from "../components/header/Header";
import MyBoisson from "../components/carteBoisson/Boisson";
import MyFooter from "../components/footer/Footer";

export default function Boisson() {
  return (
    <main>
      <Myheader />
      <section>
        <MyBoisson />
      </section>
      <MyFooter />
    </main>
  );
}
