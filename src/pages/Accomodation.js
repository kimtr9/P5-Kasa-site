import React from "react";
import { useParams } from 'react-router-dom';

import PageNotFound from "./PageNotFound";
import Slideshow from '../components/Slideshow'
import Collapse from "../components/Collapse";

import data from '../data/data.json'

export default function Accomodation() {
    const { id } = useParams();

    const accomodation = data.find(accomodation => accomodation.id === id);
    if (!accomodation) {
        return <div> <PageNotFound /> </div>
    }
    const tags = accomodation.tags.map(tag => {
        return (
            <button className="tags">{tag}</button>
        )
    }
    )
    const equipments = accomodation.equipments.map((equipment) =>  (
            <li key={equipment}>{equipment}</li>
    ));
        

    const starRating = (rating) => {
        const stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i}><i className=" stars star--full fa fa-solid fa-star"></i></span>);
        }
        
        for (let i = rating; i < 5; i++) {
            stars.push(<span key={i}><i className=" stars star--empty  fa fa-light fa-star"></i></span>);
        }

        return stars;
    };

    return(
        
        <div className="accomodation__page">
            <Slideshow pictures={accomodation.pictures} />

            <section className="accomodation__info">
               <h1 className="accomodation__title">{accomodation.title}</h1>
               <h3 className="accomodation__location">{accomodation.location}</h3>
               <div className="tags--section">
                  {tags}
               </div>
            </section>

            <section className='host__info'>
                  <h3 className="host--name">{accomodation.host.name}</h3>
                  <img className="host--pic" src={accomodation.host.picture} />
                  <div className="star--rating">
                   {starRating(accomodation.rating)}
                  </div>
            </section>

            <div className="collapses__section collapses--accomodation">
                 <Collapse 
                   title='Description'
                   content= {accomodation.description} />
                <Collapse
                   title= 'Equipements' 
                   content= {<ul>{equipments}</ul>} /> 
            </div>
        </div>
        
    )
}