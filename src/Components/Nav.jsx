import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='top_menu'>
            <p className='logo'>tasteIT</p>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/recipes-list">
                        <li>Recepies</li>
                    </Link>
                    <Link to="/new-recipe">
                        <li>
                            Add recipe
                        </li>
                    </Link>

                </ul>
            </nav>
        </div >
    );
};

export default Nav;