import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = ({ active }) => {
    return (
        <div className="header">
            <div className='logo'>
                <h1>Projet XML</h1>
            </div>
            <nav>
                <Link to='/' id={active === 'accueil' ? 'active' : ''} className='nav-item accueil'> Accueil </Link>
                <Link to='/articles' id={active === 'articles' ? 'active' : ''} className='nav-item articles'> Articles </Link>
                <Link to='/aide' id={active === 'aide' ? 'active' : ''} className='nav-item aide'> Aide </Link>
            </nav>
        </div>
    )
}
export default Header