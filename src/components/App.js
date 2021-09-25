import React, { useState,useEffect } from 'react'
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';
import '../css/app.css'


export const RecipeContext=React.createContext()
const LOCAL_STORAGE_KEY = 'cookingdereact.recipes'
function App() {

  console.log(sampleRecipes)

  const [recipes, setRecipes] = useState(sampleRecipes)

  // for edit function
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  // to get the id of the selected recipe, if not do nothing (undefined)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  // console.log("selectedRecipe",selectedRecipe)

  // Load recipes from LocalStorage - only load once
  useEffect(() => {
    console.log("Load from LocalStorage - only load once")
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (recipeJSON !=null){
      setRecipes(JSON.parse(recipeJSON))
    }
    return () => {
    }
  }, [])


  //Store recipes to LocalStorage
  useEffect(() => {
    console.log("Store recipes to LocalStorage")
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    return () => {
    }
  }, [recipes])




  function handleRecipeChange(id,recipeChange){
    const newRecipes=[...recipes]
    const index = newRecipes.findIndex(r => r.id === id)

    newRecipes[index]=recipeChange

    setRecipes(newRecipes)
  }

  function handleRecipeSelect(id){

    setSelectedRecipeId(id)

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
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }
  
  function handleRecipeDelete(id){
    if (setSelectedRecipeId != null && selectedRecipeId ===id){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe=> recipe.id !== id))
  }


  const recipeContextValue={
    // handleRecipeAdd:handleRecipeAdd,
    // key:value same text, just specific once
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }


  return (
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList 
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          />

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