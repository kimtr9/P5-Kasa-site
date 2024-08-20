import React from 'react'
import '../styles/main.scss'
import logoFooter from '../images/logo-footer.png'


export default function Footer() {
    return (
    <footer className='footer'>
        <img src={logoFooter} className='footer__logo' alt='logo Kasa'/>
        <p className='footer__text'> © 2020 Kasa. All rights reserved </p>
    </footer>

    )
}