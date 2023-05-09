import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';

function RecipeProfile() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:4002/recipes/${id}`)
            .then(response => {
                console.log('Recipe:', response.data);
                setRecipe(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipe:', error);
            });
    }, [id]);

    return (
        <div className='recipeProfile'>
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <div>
                <p>key={recipe.id}</p>
                <h2> {recipe.name}</h2>

                <div className='profileImage'>
                    Image
                    <div className='profileFlag'>
                        flag
                    </div>
                </div>
                <div className='profileIngredients'>
                    <table>
                        <tr> data</tr>
                        <tr> data</tr>
                        <tr> data</tr>
                    </table>
                </div>
                <div className='profileDecPrep_wrapper'>
                    <div className='profileDescription'>
                        <p>description</p>
                        <p>{recipe.author}</p>
                    </div>
                    <div className='profileInstructions'>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeProfile;
