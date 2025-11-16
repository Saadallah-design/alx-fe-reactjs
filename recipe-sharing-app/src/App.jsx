import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import './App.css'

function App() {
  return (
    <>
    <RecipeList />
    <AddRecipeForm />
    </>
  )
}

export default App
