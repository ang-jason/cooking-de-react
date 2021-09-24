import React, { useState } from 'react'
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';
import '../css/app.css'

export const RecipeContext=React.createContext()

function App() {

  console.log(sampleRecipes)
  const [recipes, setRecipes] = useState(sampleRecipes)

  const recipeContextValue={
    // handleRecipeAdd:handleRecipeAdd,
    // key:value same text, just specific once
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd(){
    const newRecipe = {
      //id: Date.now().toString()
      id: uuidv4(),
      name: 'New Recipe Name',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Do nothing and throw away',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Spices 1',
          amount: '2 Tbs'
        }
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }
  
  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe=> recipe.id !== id))


  }
  return (
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList 
          recipes={recipes}/>
      </RecipeContext.Provider>

      
  );
}



export default App;


const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken into oven\n3. Serve chicken on Plate",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork into oven\n3. Serve pork on Plate",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]