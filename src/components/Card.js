import React from 'react'
import '../styles/_card.scss'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.cover} className='card__cover'/>
            <h3 className='card__title'>{props.title}</h3>
        </div>
    )

}

