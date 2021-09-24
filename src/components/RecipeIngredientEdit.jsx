import React from 'react'

export default function RecipeIngredientEdit() {
    return (
        <div>
        <div className="grid grid-cols-3 gap-20 ">
            <div className="m-3">       
            <input type="text" 
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            </div>
            <div className="m-3">       
            <input type="text" 
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            </div>
            <div className="m-3 grid justify-self-center">
            <button className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-600 hover:border-transparent rounded">&times;</button>
            </div>
        </div>
        </div>
    )
}
