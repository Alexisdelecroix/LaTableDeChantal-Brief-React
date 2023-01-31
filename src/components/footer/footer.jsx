import React from "react";
import './footerStyle.css';
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";

export default function footer() {
    return (
        <footer>
            <div className="socials">
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
            </div>
            <div className="thanks">
                <p>Merci de votre visite</p>
            </div>
        </footer>
    )
}