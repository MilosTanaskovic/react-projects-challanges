import React, {useState, useEffect} from 'react';
// import components
import Loading from './components/Loading';
import Tours from './components/Tours';

import './App.css';

const data = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // remove tour
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(data);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours();
  }, [])

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours 
        tours={tours} 
        removeTour={removeTour} 
      />
    </main>
  );
}

export default App;
