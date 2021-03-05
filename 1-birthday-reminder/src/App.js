import React,{useState} from 'react';
// import data
import data from './data';
// import comonents
import List from './components/List';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
     <section className="container">
      <h3>{people.length} birthday's today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}> clear all</button>
     </section>
    </main>
  );
}

export default App;
