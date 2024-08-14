import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='navbar'>
            <ul className='nav--links'>
               <li>
                 <NavLink to="/" end className={(nav) => (nav.isActive ? "nav--link--active" : "nav--link")}>
                  Accueil
                 </NavLink>
               </li>
               <li>
                 <NavLink to="/about" className={(nav) => (nav.isActive ? "nav--link--active" : "nav--link")}>
                  A propos
                 </NavLink>
               </li>
            </ul>
        </nav>
    )
}

