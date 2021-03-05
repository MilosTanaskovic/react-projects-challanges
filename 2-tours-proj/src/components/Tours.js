import React from 'react'
// import component
import Tour from './Tour';
/**
* @author Milos Tanaskovic
* @function Tours
**/

const Tours = ({tours, removeTour}) => {
  return(
    <section>
     <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
     </div>
     <div>
     {
      tours.map((tour) => {
       return(
        <Tour
         key={tour.id}
         {...tour} 
         removeTour={removeTour}
        />
       )
      })
     }
     </div>
    </section>
   )
  }


export default Tours