import React from 'react'
import '../styles/Card.scss'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.cover} className='card--cover'/>
            <h3 className='card--title'>{props.title}</h3>
        </div>
    )

}

