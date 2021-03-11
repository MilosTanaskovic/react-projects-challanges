import React, {useState} from 'react';
// import components
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';
import './App.css';

const allCategiries = ['all',...(new Set(items.map((item) => item.category)))];

function App() {
  const [itemMenu, setItemMenu] = useState(items);
  console.log(itemMenu);
  const [categories, setCategories] = useState(allCategiries);
  const filterItems = (category) => {
    if(category === 'all'){
      setItemMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setItemMenu(newItems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories 
          filterItems={filterItems} 
          categories={categories}
        />
        <Menu items={itemMenu} />
      </section>
    </main>
  );
}

export default App;
