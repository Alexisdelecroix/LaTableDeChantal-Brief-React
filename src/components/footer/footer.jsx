import React from "react";
import "./footerStyle.css";
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";

export default function footer() {
  return (
    <footer>
      <div className="socials">
        <a
          href="https://www.facebook.com/LaTableDeChantal/?locale=fr_FR"
          target="blank"
        >
          <img src={Facebook} alt="" />
        </a>
        <a href="https://twitter.com/?lang=fr" target="blank">
          <img src={Twitter} alt="" />
        </a>
        <a href="https://www.instagram.com/?hl=fr" target="blank">
          <img src={Instagram} alt="" />
        </a>
      </div>
      <div className="thanks">
        <p>Merci de votre visite</p>
      </div>
    </footer>
  );
}
