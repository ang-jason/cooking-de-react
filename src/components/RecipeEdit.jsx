import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
    return (
        <div className="">
        <div className="text-right">
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded m-1">&times;</button>
        </div>
        <div>
        <div class="flex items-center border-b border-green-500 py-2">
            <label htmlFor="name" className="w-1/4">Name</label>
            <input type="text" name="name" id="name"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Recipe Name"
            />
            </div>
            <div class="flex items-center border-b border-green-500 py-2">
            <label htmlFor="cookTime" className="w-1/4">Cook Time</label>
            <input type="text" name="cookTime" id="cookTime"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="1:00"
            />
            </div>
            <div class="flex items-center border-b border-green-500 py-2">
            <label htmlFor="servings" className="w-1/4">Servings</label>
            <input type="text" name="servings" id="servings"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="3"
            />
            </div>
            <div class="flex items-center border-b border-green-500 py-2">
            <label htmlFor="instructions" className="w-1/4">Instructions</label>
            <textarea name="instructions" id="instructions"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none h-52"
            />  
            </div>

            <br/>
            <div>
                <div className="mb-4">
                <label htmlFor="ingredient">Ingredient</label>
                </div>
                <div className="grid grid-cols-3">
                <div className="flex justify-self-center">
                    Name
                </div>
                <div className="flex justify-self-center">
                    Amount
                </div>
                </div>
                {/* Ingredient Components */}
                <RecipeIngredientEdit/>
                <RecipeIngredientEdit/>
            </div>
     
        </div>
        <div className="flex justify-center p-3 m-1">   
        <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
        Add Ingredient</button>
        </div>
     
        </div>
    )
}
