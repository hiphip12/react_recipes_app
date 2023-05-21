import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Nav from '../Components/Nav';

function NewRecipe() {
    const originalRecipeData = {
        name: '',
        author: '',
        country: '',
        description: '',
        instructions: '',
        image: '',
        portions: [{ ingredients: '', quantity: '' }],
    };

    const [recipeData, setRecipeData] = useState(originalRecipeData);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4002/countries')
            .then((res) => {
                setCountryList(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function handleInputChange(e) {
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value,
        });
    }

    function handlePortionInputChange(e, i) {
        const portions = [...recipeData.portions];
        portions[i][e.target.name] = e.target.value;
        setRecipeData({
            ...recipeData,
            portions: portions,
        });
    }

    function handleAddPortion() {
        setRecipeData({
            ...recipeData,
            portions: [...recipeData.portions, { ingredients: '', quantity: '' }],
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post('http://localhost:4002/recipes', { ...recipeData, country: selectedCountry })
            .then((res) => {
                console.log('Recipe added:', res.data);
                setRecipeData(originalRecipeData);
                setSelectedCountry('');
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="newRecipePage">
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <div className="RecepieForm_wrapper">
                <div className="newRecipeForm">
                    <h2>Add new recipe</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="recipe_item">
                            <label for="name">Name:</label>
                            <input type="text" name="name" id="name" value={recipeData.name} onChange={handleInputChange} />
                        </div>

                        <div className="recipe_item">
                            <label for="author">Author:</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                value={recipeData.author}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="recipe_item">
                            <label for="country_select">Recipe is from:</label>
                            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} name="country_select" id="country_select">
                                <option value="">Select a country</option>
                                {countryList.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="recipe_item">
                            <label for="description">Description:</label>
                            <textarea
                                name="description"
                                id="description"
                                value={recipeData.description}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="recipe_item">
                            <label for="image">Image link:</label>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                value={recipeData.image}
                                onChange={handleInputChange}
                            />
                        </div>

                        <p>Ingredients:</p>

                        {recipeData.portions.map((portion, i) => (
                            <div key={i}>
                                <div className="portions_wrapper">
                                    <div className="portions_item">
                                        <label for="quantity">Quantity:</label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            id="quantity"
                                            value={portion.quantity}
                                            onChange={(event) => handlePortionInputChange(event, i)}
                                        />
                                    </div>

                                    <div className="portions_item">
                                        <label for="ingredients">Ingredient:</label>
                                        <input
                                            type="text"
                                            name="ingredients"
                                            id="ingredients"
                                            value={portion.ingredients}
                                            onChange={(event) => handlePortionInputChange(event, i)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button type="button" onClick={handleAddPortion}>
                            Add Ingredients
                        </button>

                        <div className="recipe_item">
                            <label for="instructions">Instructions:</label>
                            <textarea
                                name="instructions"
                                id="instructions"
                                value={recipeData.instructions}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button className="submit_button" type="submit">
                            Post recipe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewRecipe;
