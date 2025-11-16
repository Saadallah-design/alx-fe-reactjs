import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

// Import all components used in your routes/layout
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';

// Simple layout component for the main page
const Home = () => (
  <>
    <h1>Recipe Sharing App</h1>
    <AddRecipeForm />
    <hr />
    <RecipeList />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />        
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;