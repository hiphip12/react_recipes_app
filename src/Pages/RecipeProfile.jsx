import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Nav from '../Components/Nav';
import axios from 'axios';

function RecipeProfile() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:4002/recipes/${id}`)
            .then(res => {
                console.log('Recipe:', res.data);
                setRecipe(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!recipe) {
        return <div>Error getting the recipes data!</div>;
    }

    return (
        <div className='recipeProfile'>
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <div className='profileCard'>

                <h2> {recipe.name}</h2>

                <div className='profileCard_data'>
                    <div className='image_ingredients'>
                        <div className='profileImage'>
                            <img src={recipe.image} alt={recipe.name} className="recipeImage" />
                            <div>
                                <img className="profileFlag" src={`https://flagsapi.com/${recipe.country}/flat/64.png`} alt={recipe.name} />
                            </div>
                        </div>
                        <div className='profileIngredients'>
                            <h3>Ingredients:</h3>

                            {recipe.portions && recipe.portions.map((portion, i) => (
                                <div className='portions_row' key={i}>
                                    <div className='portions_data'>
                                        {portion.quantity} - {portion.ingredients}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='profileDecPrep_wrapper'>
                        <div className='profilePrepData'>
                            <h3>Description:</h3>
                            <p>{recipe.description}</p>
                            <h3>Author:</h3>
                            <p>{recipe.author}</p>
                        </div>
                        <div className='profileInstructions'>
                            <h3>Instructions:</h3>
                            <p>{recipe.instructions}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default RecipeProfile;

