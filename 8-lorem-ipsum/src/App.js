import React, { useState } from 'react';
import './App.css';
// import components
import Header from './components/Header';
import Counter from './components/Counter';
import Paragraph from './components/Paragraph';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  return (
   <section className="section-center">
    <Header />
    <Counter 
      count={count} 
      setCount={setCount}
      text={text}
      setText={setText}
      data={data}
    />
    <Paragraph />
   </section>
  );
}

export default App;
