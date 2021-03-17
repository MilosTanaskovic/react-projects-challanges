import React from 'react'

/**
* @author Milos Tanaskovic
* @function Counter
**/

const Counter = (props) => {
 const { count, setCount, setText, text, data } = props;

 const handleSubmit = (e) => {
  e.preventDefault();
  let amount = parseInt(count);
  if(count <=0){
   amount = 1;
  }
  if(count > data.length - 1) {
   amount = data.length - 1;
  }
  setText(data.slice(0, amount));
 }
  return(
   <>
    <form 
     className="lerem-form" 
     onSubmit={handleSubmit}
    >
     <label htmlFor="amount">paragraphs: </label>
     <input 
      type="number" 
      name="amount" 
      id="amount"
      value={count}
      onChange={(e) => setCount(e.target.value)}
     />
     <button className="btn">generate</button>
    </form>
    <article className="lorem-text">
     {
      text.map((item, index) => {
       return (
        <p key={index}>{item}</p>
       )
      })
     }
    </article>
    </>
   )
  }


export default Counter