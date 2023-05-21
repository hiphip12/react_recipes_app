import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, } from 'react-router-dom';
import Nav from '../Components/Nav';
import axios from 'axios';

function RecipesList() {
    const [searchRecipe, setSearchRecipe] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:4002/recipes')
            .then(res => {
                console.log('Recipes:', res.data);
                setRecipes(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!recipes) {
        return <div>Error getting the recipes data!</div>;
    }


    function handleSearch(e) {
        setSearchRecipe(e.target.value);
    }

    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchRecipe.toLowerCase()));

    return (
        <div>
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <div className='recipeList_page'>
                <h2>Recipes List</h2>
                <div>
                    <input type="text" value={searchRecipe} onChange={handleSearch} placeholder="search.." />
                </div>

                <div className='recipe_pain'>
                    {filteredRecipes.map((recipe) => (
                        <div key={recipe.id}>
                            <div className='recipeCard'>
                                <div className='recipeImage_container'>
                                    <img src={recipe.image} alt={recipe.name} className="recipeImage" />
                                </div>
                                <h3>{recipe.name}</h3>
                                <Link to={`/recipe-profile/${recipe.id}`}>
                                    <button>see more</button>
                                </Link>

                                <img className='recipeFlag' src={`https://flagsapi.com/${recipe.country}/flat/64.png`} alt={recipe.name} />

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default RecipesList;