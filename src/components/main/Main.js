import React, { useState } from "react";
import SearchName from '../searchbars/SearchName.js'
import SearchIngredients from '../searchbars/SearchIngredients.js'
import SearchResults from '../reciperesults/SearchResults.js'
import { searchName, searchIngredients } from '../../api/apiFunctions.js'


function Main(props) {
  const [name, setName] = useState("Pizza");
  const [ingredients, setIngredients] = useState("meat,tomato,lettuce");
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [results, setResults] = useState([]);
  
  const searchByName = async (e) => {
    e.preventDefault();
    const searchResults = await searchName(name, vegan, vegetarian, gluten);
    if(searchResults.code){
      alert(searchResults.message);
    }
    if(searchResults.length === 0){
      alert("No recipes found");
    }
    const processedResults = [];
    for (let i = 0 ; i < searchResults.length ; i++){
      const recipe = searchResults[i];
      processedResults.push({
        id: recipe.id,
        image: recipe.image,
        name: recipe.title
      }) 
    }
    setResults(processedResults);
  }

  const searchByIngredients = async (e) => {
    e.preventDefault();
    const searchResults = await searchIngredients(ingredients);
    if(searchResults.code){
      alert(searchResults.message);
    }
    if(searchResults.length === 0){
      alert("No recipes found");
    }

    const processedResults = [];
    for (let i = 0 ; i < searchResults.length ; i++){
      const recipe = searchResults[i];
      processedResults.push({
        id: recipe.id,
        image: recipe.image,
        name: recipe.title
      }) 
    }
    setResults(processedResults);
  }

  const changeVegan = () => {
    vegan ? setVegan(false) : setVegan(true);
  }
  
  const changeVegetarian = () => {
    vegetarian ? setVegetarian(false) : setVegetarian(true);
  }
  const changeGluten = () => {
    gluten ? setGluten(false) : setGluten(true);
  }
  
  return (
    <div>
      <div className="search-div">
        <div className="search-container">
          <div className="search-header">SEARCH</div>
          <div className="search-bars">
            <div className="search-form w-form">
               <SearchName searchByName={searchByName} setName={setName} changeVegan ={changeVegan} changeVegetarian={changeVegetarian} changeGluten={changeGluten}/>
               <SearchIngredients searchByIngredients={searchByIngredients} setIngredients={setIngredients}/>
            </div>
          </div>
        </div>
      </div>
      <SearchResults setFlag={props.setFlag} results={results} selectRecipe={props.selectRecipe} />
    </div>
  );
}

export default Main;
