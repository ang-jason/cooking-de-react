import React from 'react'

export default function RecipeIngredientEdit(props) {
    const {
        ingredient, 
        handleIngredientChange,
        handleIngredientDelete
    } = props

    function handleChange(changes){

        // created a new object instead of changing to the state directly
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes}) 

        // handleChange({ name: 'NewNew Name'})
    }

    return (
        <div>
        <div className="grid grid-cols-3 gap-20 ">
            <div className="m-3">       
            <input type="text" 
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={ingredient.name}
                onChange={(e)=> handleChange({ name: e.target.value})}
            />
            </div>
            <div className="m-3">       
            <input type="text" 
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={ingredient.amount}
                onChange={(e)=> handleChange({ amount: e.target.value})}
            />
            </div>
            <div className="m-3 grid justify-self-center">
            <button className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-600 hover:border-transparent rounded"
            onClick={(e)=> handleIngredientDelete(ingredient.id)}
            
            >&times;</button>
            </div>
        </div>
        </div>
    )
}
