import React from 'react'

import urn from "../../assets/images/logo-univrouen.jpg"
import Header from '../../components/Header/Header'

const Accueil = () => {
    return (
        <div className='accueil'>
            <Header active="accueil" />
            
            <img src={urn} alt="Logo Université de Rouen Normandie" />
            <h1>Service REST & Client</h1>
            <h4>Version : 1.2</h4>
            <h3>Développeurs : </h3>
            <ul>
                <li><h3>Merzeg Ramzi</h3></li>
                <li><h3>Mokrane Islam</h3></li>
            </ul>
        </div>
    )
}

export default Accueil