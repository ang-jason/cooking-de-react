import React from 'react'
import Recipe from './Recipe'

function RecipeList(props) {
    const {
        recipes, handleRecipeAdd, handleRecipeDelete
    } = props
    return (
        <div className="grid grid-cols-2 divide-x h-screen">
        <div>
            {recipes.map(recipe => {
                return (
                <Recipe 
                    key={recipe.id} 
                    {...recipe} 
                    handleRecipeDelete={handleRecipeDelete}
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
        <div className="p-3">
        <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
        Add Recipe LEFT</button>

        </div>
       
        </div>
    )
}

export default RecipeList

