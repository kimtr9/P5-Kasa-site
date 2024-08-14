import React from "react";
import NavBar from "./NavBar";
import logo from '../images/logo.png'


export default function Header() {
    return (

            <header className='header'>
                <img alt='logo' src={logo} />
                <NavBar />
            </header>


    )
}

