import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NewRecipe from './Pages/NewRecipe';
import RecipesList from './Pages/RecipesList';
import RecipeProfile from './Pages/RecipeProfile';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes-list/*" element={<RecipesList />} />
          <Route path="/new-recipe/*" element={<NewRecipe />} />
          <Route path="/recipe-profile/:id" element={<RecipeProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
