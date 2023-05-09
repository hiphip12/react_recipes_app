import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';

function NewRecipe() {

    const [recipeData, setRecipeData] = useState({
        name: '',
        author: '',
        selectedCountry: '',
        description: '',
        quantity: '',
        ingredients: '',
        instructions: ''

    });

    function handleInputChange(event) {
        setRecipeData({
            ...recipeData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:4002/recipes', recipeData)
            .then(response => {
                console.log('Recipe added:', response.data);
                setRecipeData({
                    name: '',
                    author: '',
                    instructions: '',
                });
            })
            .catch((error) => {
                console.error('Error adding recipe:', error);
            });
    }

    // country selection
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4001/countries')
            .then(res => {
                setCountryList(res.data);
            })
            .catch(error => {
                console.error('Error loading countries:', error);
            });
    }, []);

    return (
        <div className='newRecipePage'>
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <h2>Add new recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={recipeData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Author
                    <input
                        type="text"
                        name="author"
                        value={recipeData.author}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Recipe is from:
                    <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
                        <option value="">Select a country</option>
                        {countryList.map(country => (
                            <option key={country.name} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>

                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={recipeData.description}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <div className='materials_wrapper'>
                    <label>
                        Quantity
                        <input type="text" name="quantity" value={recipeData.quantity}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Ingredients
                        <input type="text" name="ingredients" value={recipeData.ingredients}
                            onChange={handleInputChange} />
                    </label>
                </div>
                <br />
                <button type="submit">add more</button>
                <br />
                <label>
                    Instructions:
                    <textarea
                        name="instructions" value={recipeData.instructions}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Post recipe</button>
            </form>
        </div>
    );
}

export default NewRecipe;