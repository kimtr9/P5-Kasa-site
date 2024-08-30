import React from "react";
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'


export default function Header() {
    return (

            <header className='header'>
                <img className="logo" alt='logo' src={logo} />
                <nav className='navbar'>
                  <ul className='nav__links'>
                     <li>
                       <NavLink to="./" end className={(nav) => (nav.isActive ? "nav__link--active" : "nav__link")}>
                        Accueil
                       </NavLink>
                    </li>
                    <li>
                       <NavLink to="/about" className={(nav) => (nav.isActive ? "nav__link--active" : "nav__link")}>
                        A propos
                       </NavLink>
                    </li>
                  </ul>
                </nav>
            </header>


    )
}

