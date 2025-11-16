import React from 'react';
import { useRecipeStore } from '../stores/useRecipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  // 1. Get the delete action from the store
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
        console.log('Deleting recipe with ID:', recipeId);
      deleteRecipe(recipeId);
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