import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../stores/useRecipeStore';
import EditRecipeForm from './EditRecipeForm'; 
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const idToFind = Number(recipeId); // Convert string URL param to a number
  
  const [isEditing, setIsEditing] = useState(false);

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === idToFind)
  );

  // --- Handle Recipe Not Found ---
  if (!recipe) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Recipe Not Found</h2>
        <p>The requested recipe could not be loaded.</p>
        <Link to="/">← Back to List</Link>
      </div>
    );
  }

  // --- Render Component ---
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      
      <Link to="/">← Back to Recipe List</Link>
      
      {/* Conditionally render the Edit Form or the Details View */}
      {isEditing ? (
        
        <EditRecipeForm 
          recipeId={idToFind}
          onSave={() => setIsEditing(false)}
          onCancel={() => setIsEditing(false)}
        />
        
      ) : (
        
        <>
          <h1 style={{ marginBottom: '5px' }}>{recipe.name}</h1>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button onClick={() => setIsEditing(true)}>
              Edit Recipe
            </button>
            
            {/* 3. Render the Delete Button */}
            <DeleteRecipeButton recipeId={idToFind} />
          </div>
          
          <h3>Ingredients:</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </>
      )}
      
    </div>
  );
};

export default RecipeDetails;