import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/CookiesPage.css';
import { cookies } from '../Data/items';

const CookiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const AllCookies = [...cookies];
  const [flavorFilter, setFlavorFilter] = useState('All');
  const [textureFilter, setTextureFilter] = useState('All');
  const [dietaryFilter, setDietaryFilter] = useState('All');
  const [popularityFilter, setPopularityFilter] = useState('All');
  const [sortOption, setSortOption] = useState('default');

  // Filtering
  const filteredProducts = AllCookies.filter((product) => {
    return (
      (flavorFilter === 'All' || product.flavor.toLowerCase() === flavorFilter.toLowerCase()) &&
      (textureFilter === 'All' || product.texture.toLowerCase() === textureFilter.toLowerCase()) &&
      (dietaryFilter === 'All' || product.dietary.map(d => d.toLowerCase()).includes(dietaryFilter.toLowerCase())) &&
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
    <div className="Cookies-page">
      <div className="Cookies-hero"></div>

      <div className='bottom-section'>
        <h1>Bite Into Happiness</h1>
        <p>
          “Life is short. Make it sweet—with cookies baked to perfection.”
        </p>
      </div>

      <div className="filter-bar">
        <select onChange={(e) => setFlavorFilter(e.target.value)}>
          <option value="All">All Flavors ▼</option>
          <option value="chocolate">Chocolate</option>
          <option value="peanut butter">Peanut Butter</option>
          <option value="fruity">Fruity</option>
          <option value="classic">Classic</option>
          <option value="mint">Mint</option>
          <option value="nutty">Nutty</option>
        </select>

        <select onChange={(e) => setTextureFilter(e.target.value)}>
          <option value="All">All Textures ▼</option>
          <option value="chewy">Chewy</option>
          <option value="crispy">Crispy</option>
          <option value="soft">Soft</option>
              <option value="crunchy">Crunchy</option>
          
        </select>

        <select onChange={(e) => setDietaryFilter(e.target.value)}>
          <option value="All">All Diets ▼</option>
          <option value="vegan">Vegan</option>
          <option value="dairy-free">Dairy-Free</option>
          <option value="nut-free">Nut-Free</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="vegetarian">Vegetarian</option>
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

      <div className="Cookies-grid">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/cookie/${product.id}`}
            className="Cookies-card"
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>

      <div className="Cookies-note">
        <p>
          🍪 Want custom cookies? <a href="/contact">Tell us what you need</a> and we’ll bake it your way!
        </p>
      </div>
    </div>
  );
};

export default CookiesPage;
