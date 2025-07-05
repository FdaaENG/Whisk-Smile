import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/BirthdayPage.css';
import { BirthdayProducts } from '../Data/items';



const BirthdayPage = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    const birthdayProducts = [...BirthdayProducts];
    const [ageFilter, setAgeFilter] = useState('All');
    const [themeFilter, setThemeFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');
    const [dietaryFilter, setDietaryFilter] = useState('All');

    const filteredProducts = birthdayProducts.filter((product) => {
        return (
            (ageFilter === 'All' || product.ageGroup === ageFilter) &&
            (themeFilter === 'All' || product.theme === themeFilter) &&
            (typeFilter === 'All' || product.type === typeFilter) &&
            (dietaryFilter === 'All' || product.dietary === dietaryFilter)
        );
    });

    return (
        <div className="birthday-page">
            <div className="birthday-hero">

            </div>

            <div className='bottom-section'>
                <h1>🎉 Celebrate with Whisk & Smile</h1>
                <p>Delicious cakes and cookies made just for birthdays — from kids’ favorites to elegant treats for adults.</p>
            </div>

            <div className="filter-bar">
                <select value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)}>
                    <option value="All">All Age Groups ▼</option>
                    <option value="Kids">Kids</option>
                    <option value="Teens">Teens</option>
                    <option value="Adults">Adults</option>
                </select>

                <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)}>
                    <option value="All">All Themes ▼</option>
                    <option value="Mickey">Mickey</option>
                    <option value="Princess">Princess</option>
                    <option value="Elegant">Elegant</option>
                    <option value="Chocolate Lover">Chocolate Lover</option>
                </select>

                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="All">All Types ▼</option>
                    <option value="Cake">Cake</option>
                    <option value="Cookies">Cookies</option>
                </select>

                <select value={dietaryFilter} onChange={(e) => setDietaryFilter(e.target.value)}>
                    <option value="All">All Dietary ▼</option>
                    <option value="Nut-free">Nut-free</option>
                    <option value="Eggless">Eggless</option>
                    <option value="Vegan">Vegan</option>
                </select>
            </div>


            <div className="birthday-grid">
                {filteredProducts.map((product) => (
                    <Link
                        key={product.id}
                        to={
                            product.type === 'Cake'
                                ? `/cake/${product.id}`
                                : `/cookie/${product.id}`
                        }
                        className="birthday-card"
                    >
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </Link>
                ))}
            </div>

            <div className="birthday-note">
                <p>🎂 Need something custom? <a href="/contact">Let us know</a> and we’ll bake it your way!</p>
            </div>
        </div>
    );
};

export default BirthdayPage;
