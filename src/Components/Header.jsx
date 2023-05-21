import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Nav from './Nav';
import recipeVideo from "../assets/video/pexels-luna-lovegood-4474373-1280x720-50fps.mp4"

const Header = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <header>
                <div className="video_container">
                    <video id="background_video" src={recipeVideo} autoPlay loop muted />
                    <div className="header_content">
                        <div className='header_text'>
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