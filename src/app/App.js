import './App.css'
import React, { useState } from "react";
import Main from '../components/main/Main.js'
import Recipe from '../components/recipe/Recipe.js'
import { getRecipeInfo } from '../api/apiFunctions.js'
import logo from '../images/logo.png'

function App() {
  const [flag, setFlag] = useState(false);
  const [recipe, setRecipe] = useState({});

  const selectRecipe = async (id, image) => {   
    const recipeInfo = await getRecipeInfo(id, image);
    setRecipe(recipeInfo);
    setFlag(true);
  }

  const handleClick = (e) => {
    setFlag(false);
  }
  
  
  return (
    <div>
      <div className="navbar wf-section">
        <div className="logo-div"><img src={logo} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 35vw, (max-width: 991px) 25vw, 207.671875px" alt="" /></div>
        <div className="slogan-div">
          <div className="text-block">RECIPE SEARCHER POWERED BY SPOONACULAR API</div>
        </div>
      </div>
        {
          !flag ? <Main setFlag={setFlag} selectRecipe={selectRecipe} /> : <Recipe setFlag={handleClick} recipe={recipe}/>
        }
    </div>
  );
}

export default App;
