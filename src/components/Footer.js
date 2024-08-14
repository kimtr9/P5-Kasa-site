import React from 'react'
import '../styles/Footer.scss'
import logoFooter from '../images/logo-footer.png'


export default function Footer() {
    return (
    <footer className='footer'>
        <img src={logoFooter} className='logo--footer' alt='logo Kasa'/>
        <p className='footer--text'> © 2020 Kasa. All rights reserved </p>
    </footer>

    )
}