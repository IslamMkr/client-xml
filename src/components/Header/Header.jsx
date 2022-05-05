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
                <Link to='/' id={active === 'accueil' ? 'active' : ''} className='nav-item accueil'>Accueil</Link>
                <Link to='/articles' id={active === 'json' ? 'active' : ''} className='nav-item articles'>Articles</Link>
                <Link to='/articles/html' id={active === 'html' ? 'active' : ''} className='nav-item articles'>HTML</Link>
                <Link to='/articles/xml' id={active === 'xml' ? 'active' : ''} className='nav-item articles'>XML</Link>
                <Link to='/aide' id={active === 'aide' ? 'active' : ''} className='nav-item aide'>Aide</Link>
            </nav>
        </div>
    )
}

export default Header