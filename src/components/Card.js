import React from 'react'
import '../styles/_card.scss'
import { Link } from 'react-router-dom';




export default function Card(props) {
    return (
       <Link className='card' to={`/accomodation/${props.id}`}>
            <img src={props.cover} className='card__cover'/>
            <h3 className='card__title'>{props.title}</h3>
       </Link> 
    )

}

