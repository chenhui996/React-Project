import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const categoriesItems = ["all", ...(new Set(items.map((item) => item.category)))];
  // console.log(categoriesItems);
  const [ menuItems, setMenuItems ] = useState(items);
  const [ categories, setCategories ] = useState(categoriesItems);

  const categoryFilter = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return
    }
    setMenuItems(items.filter((item) => item.category === category));
  }
  return (<main>
    <section className="menu section">
      <div className="title">
        <h2>案例列表</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} categoryFilter={categoryFilter} />
      <Menu items={menuItems} />
    </section>
  </main>)
}

export default App;
