import RecipeDetails from './RecipeDetails.js'
import RecipeIngredientsInstructions from './RecipeIngredientsInstructions.js'


function Recipe(props) {
  
  return (
    <div>
        <RecipeDetails recipe={props.recipe} setFlag={props.setFlag}/>
        <RecipeIngredientsInstructions recipe={props.recipe} />
    </div>
    
  );
}

export default Recipe;
