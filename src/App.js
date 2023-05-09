import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, } from 'react-router-dom';
import Home from './Components/Home';
import NewRecipe from './Components/NewRecipe';
import RecipesList from './Components/RecipesList';
import RecipeProfile from './Components/RecipeProfile';
import './App.css';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes-list" element={<RecipesList />} />
          <Route path="/new-recipe/*" element={<NewRecipe />} />
          <Route path="/recipe-profile/:id" element={<RecipeProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
