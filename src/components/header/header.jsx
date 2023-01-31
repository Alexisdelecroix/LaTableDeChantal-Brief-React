import React from "react";
import './headerstyle.css';
import {Link} from "react-router-dom"




export default function Header() {


        return (
                <header>
                    <div className="titre">
                    <p>La table de Chantal</p>
                    </div>

                    <ul>
                        <Link to="/"><li><a href="#">Accueil</a></li></Link>
                       <Link to="/Plat"> <li><a href="#">Plat</a></li></Link>
                        <Link to="/Boisson"><li><a href="#">Boisson</a></li></Link>
                        <Link to="/Contact"><li><a href="#">Contact</a></li></Link>
                    </ul>

                </header>


        )


}