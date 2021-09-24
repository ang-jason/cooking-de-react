import React from 'react'
import Recipe from './Recipe'

function RecipeList( {recipes} ) {
    return (
        <div className="grid grid-cols-2 divide-x h-screen">
        <div>
            {recipes.map(recipe => {
                return (<Recipe 
                key={recipe.id} 
                {...recipe} 

                    />)
            })
            }
            <div className="p-3">
        <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
        Add Recipe</button>
        </div>
        </div>
        <div className="p-3">
        <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
        Add Recipe</button>

        </div>
       
        </div>
    )
}

export default RecipeList

