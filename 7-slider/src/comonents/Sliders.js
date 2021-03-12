import React, {useEffect} from 'react'
import Slide from './Slide';
import { FaQuoteRight } from 'react-icons/fa';
/**
* @author Milos Tanskovic
* @function Sliders
**/

const Sliders = (props) => {
 const {people, index, setIndex} = props;

 useEffect(() => {
  const lastIndex = people.length - 1;
  if(index < 0){
   setIndex(lastIndex);
  }
  if(index > lastIndex){
   setIndex(0);
  }
 }, [index, people]);
 useEffect(() => {
  let slider = setInterval(() => {
   setIndex(index + 1);
  }, 5000);
  return () => {
   clearInterval(slider);
  }
 }, [index]);
  return(
    <div className="section-center">
     {
      people.map((person, personIndex) => {
       const { id, image, title, name, quote } = person;

       let position = 'nextSlide';
       if(personIndex === index) {
        position = 'activeSlide';
       }
       if(personIndex === index -1 || (index === 0 && personIndex === people.length - 1)){
        position = 'lastSlide';
       }
       return (
        <Slide {...person} position={position} />
       )
      })
     }
    </div>
   )
  }


export default Sliders