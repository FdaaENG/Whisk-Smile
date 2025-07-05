import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/CakePage.css';
import { Cake } from '../Data/items';

const CakePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allCakes = [...Cake];
  const [flavorFilter, setFlavorFilter] = useState('All');
  const [dietaryFilter, setDietaryFilter] = useState('All');
  const [popularityFilter, setPopularityFilter] = useState('All');
  
  const [sortOption, setSortOption] = useState('default');

  // Filtering
  const filteredProducts = allCakes.filter((product) => {



    return (
      product.type === 'Cake' &&
      (flavorFilter === 'All' || product.flavor.toLowerCase() === flavorFilter.toLowerCase()) &&
      (dietaryFilter === 'All' || product.dietary.includes(dietaryFilter.toLowerCase())) &&
      (popularityFilter === 'All' || product.popularity.toLowerCase() === popularityFilter.toLowerCase()) 
    
    );
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    if (sortOption === 'priceLowHigh') return priceA - priceB;
    if (sortOption === 'priceHighLow') return priceB - priceA;
    return 0;
  });

  return (
    <div className="Cake-page">
      <div className="Cake-hero"></div>

      <div className='bottom-section'>
        <h1>🎂  Make Every Celebration Sweeter with Whisk & Smile</h1>
        <p>“Each slice tells a story. Make yours unforgettable with our handcrafted cakes.”</p>
      </div>

      <div className="filter-bar">
        <select onChange={(e) => setFlavorFilter(e.target.value)}>
          <option value="All">All Flavors ▼</option>
          <option value="vanilla">Vanilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="red velvet">Red Velvet</option>
          <option value="lemon">Lemon</option>
          <option value="spiced">Spiced</option>
          <option value="fruity">Fruity</option>
          <option value="coffee">Coffee</option>
        </select>

        <select onChange={(e) => setDietaryFilter(e.target.value)}>
          <option value="All">All Diets ▼</option>
          <option value="nut-free">Nut-Free</option>
          <option value="vegan">Vegan</option>
          <option value="eggless">Eggless</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="dairy-free">Dairy-Free</option>
        </select>

        <select onChange={(e) => setPopularityFilter(e.target.value)}>
          <option value="All">All Popularity ▼</option>
          <option value="fan-favorite">Fan Favorite</option>
          <option value="new">New</option>
          <option value="bestseller">Bestseller</option>
        </select>

      
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="default">Sort By ▼</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>

      <div className="Cake-grid">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/cake/${product.id}`}
            className="Cake-card"
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>

      <div className="Cake-note">
        <p>🎂 Want a custom cake? <a href="/contact">Tell us your dream dessert</a> and we’ll bake it to life!</p>
      </div>
    </div>
  );
};

export default CakePage;
