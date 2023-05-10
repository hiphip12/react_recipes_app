import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';

function NewRecipe() {

    const [recipeData, setRecipeData] = useState({
        name: '',
        author: '',
        country: '',
        description: '',
        instructions: '',
        image: '',
        portions: [{ ingredients: '', quantity: '' }]
    });

    function handleInputChange(event) {
        setRecipeData({
            ...recipeData,
            [event.target.name]: event.target.value,
        });
    }

    function handlePortionInputChange(event, i) {
        const portions = [...recipeData.portions];
        portions[i][event.target.name] = event.target.value;
        setRecipeData({
            ...recipeData,
            portions: portions
        });
    }

    function handleAddPortion() {
        setRecipeData({
            ...recipeData,
            portions: [...recipeData.portions, { ingredients: '', quantity: '' }]
        });
    }

    // country selection
    const [selectedCountry, setSelectedCountry] = useState({
    });

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

    //using axios to post data in JSON server

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:4002/recipes', { ...recipeData, country: selectedCountry })
            .then(response => {
                console.log('Recipe added:', response.data);
                setRecipeData({
                    name: '',
                    author: '',
                    instructions: '',
                    country: '',
                    image: '',
                    portions: [{ ingredients: '', quantity: '' }]
                });
            })
            .catch((error) => {
                console.error('Error adding recipe:', error);
            });
    }

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
                            <option key={country.code} value={country.code}>
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
                <label>
                    Image link
                    <input
                        type="text"
                        name="image"
                        value={recipeData.image}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <div className='portions_wrapper'>
                    {recipeData.portions.map((portion, i) => (
                        <div key={i}>
                            <label>
                                Quantity
                                <input type="text" name="quantity" value={portion.quantity}
                                    onChange={(event) => handlePortionInputChange(event, i)} />
                            </label>
                            <label>
                                Ingredients
                                <input type="text" name="ingredients" value={portion.ingredients}
                                    onChange={(event) => handlePortionInputChange(event, i)} />
                            </label>
                        </div>))}
                </div>
                <br />
                <button type='button' onClick={handleAddPortion}>Add portion</button>
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