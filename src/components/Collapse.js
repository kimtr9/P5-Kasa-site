import React from 'react'
import { useState } from 'react'

export default function Collapse({open, content, title}) {

    const [isOpen, setIsOpen] = useState(open);

    const handleOpening = () => {
        setIsOpen((prev) => !prev);  
    }

    return (
      <div className='collapse__item'>
          <button className='collapse__btn' type='button' onClick={handleOpening}>
            {title}
            <span className={`collapse__icon ${isOpen ? 'collapse__icon--rotated' : ''}`}>
                <i className="fa fa-angle-down" /> 
            </span>
          </button>
          <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
               {content}
          </div>
      </div>

    )
   
}

