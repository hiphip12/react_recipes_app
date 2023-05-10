import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, } from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';

function RecipesList() {
    const [searchRecipe, setSearchRecipe] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4002/recipes')
            .then(response => {
                console.log('Recipes:', response.data);
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    }, []);

    function handleSearch(e) {
        setSearchRecipe(e.target.value);
    }

    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchRecipe.toLowerCase()));

    return (
        <div>
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <h1>Recipes List</h1>

            <div>
                <input type="text" value={searchRecipe} onChange={handleSearch} placeholder="search.." />
            </div>

            <div>
                <ul>
                    {filteredRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>{recipe.name}</h3>
                            <p>{recipe.author}</p>
                            <p>{recipe.instructions}</p>
                            <img src={recipe.image} alt={recipe.name} className="recipeImage" />
                            <Link to={`/recipe-profile/${recipe.id}`}>
                                <h2>see more</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default RecipesList;