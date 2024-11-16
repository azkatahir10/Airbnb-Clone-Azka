import React, { useState } from 'react';
import '../scss/Categories.scss';

const categories = ["Beachfront", "Cabins", "Trending", "Apartments", "Luxury"];

function Categories() {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="categories">
      {categories.map(category => (
        <button
          key={category}
          className={activeCategory === category ? 'active' : ''}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
