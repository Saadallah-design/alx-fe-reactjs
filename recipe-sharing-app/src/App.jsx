import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeStore from './components/recipeStore'
import './App.css'

function App() {
  return (
    <>
    <RecipeList />
    <AddRecipeForm />
    <RecipeStore />
    </>
  )
}

export default App
