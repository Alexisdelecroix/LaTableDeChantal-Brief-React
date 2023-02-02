import React from 'react';
import MyHeader from '../header/Header';


export default function Plat() {

    return (
    
        <form action="">
            <label for="prenom">Prénom:<span>*</span></label>
            <input type="text" name="prenom" id="prenom" pattern="[A-Za-z]+" title="Le prénom ne peut contenir que des lettres." placeholder="Jenna" required></input>

            <label for="nom">Nom:<span>*</span></label>
            <input type="text" name="nom" id="nom" pattern="[A-Za-z]+" placeholder="Grande" required></input>

            
        </form>

    )
}