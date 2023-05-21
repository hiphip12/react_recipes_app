import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='top_menu'>
            <Link to="/"><p className='logo'>ReactRecipes</p> </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/recipes-list">
                            Recepies
                        </Link>
                    </li>
                    <li>
                        <Link to="/new-recipe">
                            Add recipe
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Nav;