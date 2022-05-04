import React from 'react'

import urn from "../../assets/images/logo-univrouen.jpg"
import Header from '../../components/Header/Header'

import './Accueil.css'

const Accueil = () => {
    return (
        <div className='accueil'>
            <Header active="accueil" />
            
            <div className='accueil-content'>
                <img src={urn} alt="Logo Université de Rouen Normandie" />
                <h1>Service REST & Client</h1>
                <h4>Version : 1.5</h4>

                <div className='devs'>
                    <h2>Développeurs : </h2>
                    <ul>
                        <li><h3>Merzeg Ramzi</h3></li>
                        <li><h3>Mokrane Islam</h3></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Accueil