import React from 'react';
import Myheader from '../components/header/Header'
import MyPlat from '../components/cartePlat/Plat'
import MyEntree from '../components/cartePlat/Entree'
import MyFooter from "../components/footer/Footer";

export default function Plat() {

    
        return (
            <div>
                
<Myheader/>
<h1>La carte des plats</h1>

<h2>Nos entrées</h2>
<MyEntree/>
<h2>Nos plats</h2>
<MyPlat/>
<h2>Nos desserts</h2>
<MyFooter/>
            </div>
        );
    }




