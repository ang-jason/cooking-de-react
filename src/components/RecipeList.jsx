import React, { useContext } from 'react'
import Recipe from './Recipe'
import {RecipeContext} from './App'
import RecipeEdit from './RecipeEdit';


function RecipeList({recipes}) {
    const { handleRecipeAdd } = useContext(RecipeContext)

    return (
        <div className="grid grid-cols-2 divide-x h-screen">
        <div>
            {recipes.map(recipe => {
                return (
                <Recipe 
                    key={recipe.id} 
                    {...recipe} 
                    />)
            })
            }
            <div className="flex p-3 justify-center m-1">
        <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleRecipeAdd}
        >
        Add Recipe</button>
        </div>
        </div>
        <div className="p-3 overflow-auto">
        <RecipeEdit/>
        </div>
       
        </div>
    )
}

export default RecipeList

