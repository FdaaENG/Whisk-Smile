
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {cakeProducts, cookieProducts} from '../Data/items';
import '../Style/FanFavorites.css';


const FanFavorites = () => {
  const products = [...cakeProducts, ...cookieProducts];
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(item => item.type === filter);

  return (
 <div className="fan-favorites">
  <p className='fanTitle'>Fan Favorites ❤️</p>

  {/* Filter Buttons */}
  <div className="filter-buttons">
    <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
    <button onClick={() => setFilter('cake')} className={filter === 'cake' ? 'active' : ''}>Cake</button>
    <button onClick={() => setFilter('cookie')} className={filter === 'cookie' ? 'active' : ''}>Cookies</button>
  </div>

      {/* Product Grid */}

      <div className="product-grid">
        {filteredProducts.map(item => (
          <Link
            to={item.type === 'cake' ? `/cake/${item.id}` : `/cookie/${item.id}`}
            key={item.id}
            className="product-link">
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
          </Link>

        ))}
      </div>

    </div>
  );
};

export default FanFavorites;
