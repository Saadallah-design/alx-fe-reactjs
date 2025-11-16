import React, { useState, useEffect } from 'react';
import { useRecipeStore } from '../stores/useRecipeStore';

const EditRecipeForm = ({ recipeId, onSave, onCancel }) => {
  // 1. Get the update action from the store
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // 2. Get the specific recipe data
  const recipeToEdit = useRecipeStore((state) => 
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  
  // State to hold the form data (initialized from the store data)
  const [formData, setFormData] = useState({ 
    name: '', 
    ingredients: '', 
  });

  useEffect(() => {
    if (recipeToEdit) {
      setFormData({
        name: recipeToEdit.name,
        // Assuming ingredients is an array; join it into a comma-separated string for the input field
        ingredients: recipeToEdit.ingredients.join(', '), 
      });
    }
  }, [recipeToEdit]);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipeToEdit) return; // Should not happen if used correctly

    const updatedRecipe = {
      ...recipeToEdit, // Keep the original ID
      name: formData.name,
      // Convert the comma-separated string back into an array
      ingredients: formData.ingredients.split(',').map(s => s.trim()).filter(s => s.length > 0), 
    };

    // 4. Update the store with the new data
    updateRecipe(recipeId, updatedRecipe);

    // Call the callback to close the form or show a success message
    if (onSave) {
      onSave();
    }
  };

  if (!recipeToEdit) {
    return <p>Loading recipe data or recipe not found...</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '15px' }}>
      <h3>Edit Recipe: {recipeToEdit.name}</h3>
      <div>
        <label htmlFor="name">Recipe Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients (comma separated):</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel || (() => {})}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;