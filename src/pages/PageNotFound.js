import React from "react";


export default function PageNotFound() {
    return (
        <div className="error__page"> 
            <h1 className="error__page--title">404</h1>
            <h2 className="error__page--text">Oups! La page que vous demandez n'existe pas.</h2>
            <a className="error__page--link" href='/'>Retournez sur la page d'accueil</a>
        </div>
    )
}