import React, { useState } from 'react';
// import components
import Header from './comonents/Header';
import Sliders from './comonents/Sliders';
import Buttons from './comonents/Buttons';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
     <Header />
     <Sliders 
      people={people} 
      index={index}
      setIndex={setIndex}
    />
     <Buttons 
      setIndex={setIndex} 
      index={index}/>
    </section>
  );
}

export default App;
