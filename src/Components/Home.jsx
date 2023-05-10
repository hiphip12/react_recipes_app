import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

                        <div className='card1'>
                            <h3>
                                Browse recepies
                            </h3>
                            <p>
                                something...sdkdsölkasdöl
                            </p>
                            <a href="/">All recepies</a>
                        </div>

                        <div className='card2'>
                            <h3>
                                Add recepies
                            </h3>
                            <p>
                                something...sdkdsölkasdöl
                            </p>
                            <a href="/">Add recepies</a>
                        </div>

                        <div className='card3'>
                            <h3>
                                Want to lknow more about our projects?
                            </h3>
                            <p>
                                something...sdkdsölkasdöl
                            </p>
                            <a href="/">BCH Homepage</a>
                        </div>

                    </section>
                </main>
            </body>
        </div>
    );
};

export default Home;