import React from 'react';
import { useRecipeStore } from '../stores/useRecipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const navigate = useNavigate();
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
        console.log('Deleting recipe with ID:', recipeId);
      deleteRecipe(recipeId);
      // this is for directing user to root path which shows the RecipeList
      navigate('/')
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ marginLeft: '10px', backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;