
import RecipeCard from './RecipeCard.js';


function SearchResults(props) {
  return (
    <div className="results-container">
      <div className="results-header">RECIPES</div>
      <div className="results-div">
        {props.results.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} setFlag={props.setFlag} selectRecipe={props.selectRecipe} />
      ))}
      </div>
    </div>   
  );
}

export default SearchResults;
