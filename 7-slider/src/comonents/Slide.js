import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';

/**
* @author Milos Tanaskovic
* @function Slide
**/

const Slide = (props) => {
 const { id, image, title, name, quote, position } = props;
  return(
    <article className={position} key={id}>
     <img src={image} alt={name} className="person-img"/>
     <p className="title">{title}</p>
     <p className="text">{quote}</p>
     <FaQuoteRight className="icon"/>
    </article>
   )
  }


export default Slide