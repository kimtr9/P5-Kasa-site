import React from 'react'
import '../styles/_banner.scss'


export default function Banner({backgroundImg, text}) {
    const bannerStyle = {backgroundImage:`url(${backgroundImg})`}

    return (
        <div className='banner' style={bannerStyle}>
            {text && <h1 className='banner__text'>{text}</h1>}
        </div>
    )
    
}