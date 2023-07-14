

function RecipeDetails(props) {
  const recipe = props.recipe;
  
  return (
    <div className="recipe-details">
      <div className="recipe-img-title div-block-4">
        <img src={recipe.image} loading="lazy" alt="" className="image-2" />
        <div className="text-block-3">{recipe.name}</div>
      </div>
      <div className="recipe-info">
        <div className="details">
          <div className="details-title">DETAILS</div>
          <div className="w-layout-grid grid">
            <div className="recipe-label">Servings</div>
            <div className="recipe-label">{recipe.servings}</div>
            <div className="recipe-label">Ready in</div>
            <div className="recipe-label">{recipe.time} mins</div>
            <div className="recipe-label">Vegan</div>
            <div className="recipe-label">{recipe.vegan ? "Yes" : "No"}</div>
            <div className="recipe-label">Vegetarian</div>
            <div className="recipe-label">{recipe.vegetarian ? "Yes" : "No"}</div>
            <div className="recipe-label">Gluten free</div>
            <div className="recipe-label">{recipe.glutenFree ? "Yes" : "No"}</div>
          </div>
          <div className="go-back">
            <a href="#top" className="button-2 w-button" onClick={props.setFlag}>Go back</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
