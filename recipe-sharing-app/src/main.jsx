import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import RecipeList from './components/RecipeList.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'
import ReactDOM from 'react-dom/client';
import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

// A simple layout component to hold the forms
const Home = () => (
  <>
    <h1>Recipe Sharing App</h1>
    <AddRecipeForm />
    <hr />
    <RecipeList />
  </>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />        
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
