import React from "react";
import "./headerstyle.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="titre">
        <Link className="Link" to="/">
          <p>La table de Chantal</p>
        </Link>
      </div>

      <ul>
        <Link className="Link" to="/">
          <li>Accueil</li>
        </Link>
        <Link className="Link" to="/Plat">
          {" "}
          <li>Plat</li>
        </Link>
        <Link className="Link" to="/Boisson">
          <li>Boisson</li>
        </Link>
        <Link className="Link" to="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
}
