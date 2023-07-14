
function RecipeCard(props) {
  
  const recipe = props.recipe;

  async function handleClick (e) {
    props.selectRecipe(recipe.id, recipe.image);
  }
  
  return (
    <div className="recipe-card">
      <div className="div-block-3">
        <img src={recipe.image} loading="lazy" alt="" className="image" />           </div>
        <div className="recipe-detail-div">
          <div className="text-block-2">{recipe.name}</div>
          <a href="#top" className="button w-button" onClick={handleClick}>Learn more</a>
        </div>
    </div>
  );
    
}

export default RecipeCard;
