const apiKey = process.env.REACT_APP_API_KEY;

export async function searchName(name, vegan, vegetarian, gluten) {
  const query = name.replaceAll(" ", "%20");
  const diet = [];
  if(vegan){
    diet.push("vegan")
  }
  if(vegetarian){
    diet.push("vegetarian")
  }
  if(gluten){
    diet.push("gluten%20free")
  }
  if(!diet){
    const response = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=50`);
    const searchResults = await response.json();
    if(searchResults.code){
      return searchResults;
    }else{
      return searchResults.results;
    }
  }else{
    const sdiet = diet.toString();
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=50&diet=${sdiet}`);
    const searchResults = await response.json();
    if(searchResults.code){
      return searchResults;
    }else{
      return searchResults.results;
    }
    
  }

  
  
};

export async function searchIngredients(ingredients) {
  const query = ingredients.replaceAll(" ", ",");
  const response = await fetch (`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${query}&number=50`);
  const searchResults = await response.json();
  return searchResults;
}

export async function getRecipeInfo(idNumber, image) {
  const id = idNumber.toString();
  const infoResponse = await fetch (`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
  const infoResults= await infoResponse.json();
  const ingredients = [];
  for (let i = 0 ; i < infoResults.extendedIngredients.length ; i++){
    ingredients.push(infoResults.extendedIngredients[i].original);
  }
  
  const instructionsResponse = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`)
  const instructionsResults = await instructionsResponse.json();
  const instructions = [];
  for (let i = 0 ; i < instructionsResults.length ; i++){
    for(let j = 0 ; j < instructionsResults[i].steps.length ; j++){
      instructions.push(instructionsResults[i].steps[j].step);
    }
  };

  if(!infoResults.image){
    infoResults.image = image;
  }
  
  const recipe = {
    id: id,
    name: infoResults.title,
    image: infoResults.image,
    popular: infoResults.veryPopular,
    servings: infoResults.servings,
    time: infoResults.readyInMinutes,
    vegan: infoResults.vegan,
    vegetarian: infoResults.vegetarian,
    glutenFree: infoResults.glutenFree,
    ingredients: ingredients,
    instructions: instructions
  }

  return recipe;
}
