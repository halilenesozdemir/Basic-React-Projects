import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState(items);
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
