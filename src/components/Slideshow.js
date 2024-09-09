import React from "react";
import { useState } from 'react';


export default function Slideshow(props)  {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = props.pictures;

    if (pictures.length === 1) {
        return <img src={pictures[0]} alt='image' className="carousel__img" />;
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex -1 + pictures.length) % pictures.length 
        )
    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex +1) % pictures.length
        )   
    }

    return (
        <div className="carousel">
            <div className="carousel--container">
              <img className="carousel__img" src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
               <button className="prev--btn" onClick={handlePrev}>
               <i className=" chevron--icon fa fa-angle-left"></i> 
               </button>
               <button className="next--btn" onClick={handleNext}>
               <i className="chevron--icon fa fa-angle-right"></i>
               </button>  
               <p className="img__pagination">{[currentIndex + 1]}/{pictures.length}</p>
            </div>         
        </div>
    )
}