import React from "react";
import Myheader from "../components/header/Header";
import MyContact from "../components/formulaire/Formulaire";
import MyFooter from "../components/footer/Footer";
import MyMaps from "../components/formulaire/Maps"

export default function Plat() {
  return (
    <main>
      <Myheader />
      <MyContact />
      <MyMaps/>
      <MyFooter />
    </main>
  );
}
