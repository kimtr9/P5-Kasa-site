import React from "react";
import { useState } from 'react';


export default function Slideshow(props)  {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = props.pictures;

    if (pictures.length === 1) {
        return <img src={pictures[0]} alt='image' className="carousel__img" />;
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
           prevIndex === 0 ? pictures.length -1 : prevIndex -1
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
               ❮ 
               </button>
               <button className="next--btn" onClick={handleNext}>
               ❯
               </button>  
            </div>         
        </div>
    )
}