import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Nav from './Nav';
import recipeVideo from "./pexels-luna-lovegood-4474373-1280x720-50fps.mp4"

const Header = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <header>
                <div className="video-container">
                    <video id="background-video" src={recipeVideo} autoPlay loop muted />
                    <div className="content">
                        <div className='header-card'>
                            <h1>
                                ReactRecipes
                            </h1>
                            <p>ReactRecipes is recepie app which is the final task for React basics course REACT23K group</p>
                            <Link to="/recipes-list">
                                <button>
                                    Browse recipes
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header >

        </div >
    );
};

export default Header;