import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import {RecipeContext} from './App'

function Recipe(props) {
    const { handleRecipeDelete } = useContext(RecipeContext)
    const {
        id,
        name, 
        cookTime, 
        servings, 
        instructions,
        ingredients,
    } = props
    return (
    <div>    
        <div className="border-b-2 border-pink-600">
        <div className="grid grid-flow-col grid-cols-1 p-3">
            <h3 className="text-3xl my-1">{name}</h3>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">Edit</button>

                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-300 hover:border-transparent rounded m-1"
                    onClick={() => handleRecipeDelete(id)}
                    >
                    Delete</button>           

            </div>
            <div >
                <span className="text-2xl font-bold p-3">Cook Time:</span>
                <span className="text-2xl p-3">{cookTime}</span>
            </div>
            <div>
                <span className="text-2xl font-bold p-3">Servings:</span>
                <span className="text-2xl p-3">{servings}</span>
            </div>
            <div>
                <span className="text-2xl font-bold p-3">Instructions:</span>
                <div className="text-2xl pl-3 mx-4 whitespace-pre-wrap">
                    {instructions}
                </div>
            </div>
            <div>
                <span className="text-2xl font-bold p-3">Ingredients:</span>
                <div className="text-2xl pl-3 mx-4 p-3"> 
                <IngredientList 
                    ingredients={ingredients}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Recipe
