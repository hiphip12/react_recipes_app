import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import Nav from './Nav';

const Header = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Nav />} />
            </Routes>
            <header>
                <h1>
                    TasteIT
                </h1>
                <p>TasteIT is recepie app which.....</p>
                <Link to="/recipes-list">
                    <button>
                        Browse recipes
                    </button>
                </Link>
            </header>

        </div >
    );
};

export default Header;