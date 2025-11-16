  // RecipeList component
  import { useRecipeStore } from '../stores/useRecipeStore';
  import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

   const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
<div>
      <h2>Recipe List</h2>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px' }}>          
          <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            <h3>{recipe.name}</h3>
          </Link>         
          <p>{recipe.description}</p>          
          <DeleteRecipeButton recipeId={recipe.id}/>
        </div>
      ))}
    </div>
    );
  };

export default RecipeList;