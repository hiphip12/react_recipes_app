import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    return (
        <div className='home'>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
            <body>
                <main>
                    <h2> Looking for the recipes?</h2>
                    <section className='cards'>

                        <div className='card one'>
                            <h3>
                                Browse recepies
                            </h3>
                            <p>
                                Find your favourites in this collections. You can search recipes based on name or country
                            </p>
                            <Link to="/recipes-list">
                                <p>All recepies</p>
                            </Link>
                        </div>

                        <div className='card two'>
                            <h3>
                                Add recepies
                            </h3>
                            <p>
                                Recipe from your country is missing? No worries add one!
                            </p>
                            <Link to="/new-recipe">
                                <p>Add recepies</p>
                            </Link>
                        </div>

                        <div className='card three'>
                            <h3>
                                Want to know more about our projects?
                            </h3>
                            <p>
                                Visit our programme homepage
                            </p>
                            <a href="https://www.bc.fi/" target="_blank">BCH Homepage</a>
                        </div>

                    </section>
                </main>
            </body >
        </div >
    );
};

export default Home;