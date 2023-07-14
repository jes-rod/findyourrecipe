import Accordion from 'react-bootstrap/Accordion';

function RecipeIngredientsInstructions(props) {
  const recipe = props.recipe;
  
  return (
    <div className="recipe-ing-inst">
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0" id="top-accordion">
          <Accordion.Header className="rc-titles" >Ingredients</Accordion.Header>
          <Accordion.Body>
            <ul className="list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item"><strong>{ingredient}</strong></li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="rc-titles">Instructions</Accordion.Header>
          <Accordion.Body>
            <ul className="list-2">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="instruction-item"><strong>{instruction}</strong></li>
              ))}             
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default RecipeIngredientsInstructions;
