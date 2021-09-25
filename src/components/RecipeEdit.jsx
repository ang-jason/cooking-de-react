import React,{useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid';


export default function RecipeEdit({recipe}) {
    const {handleRecipeChange , handleRecipeSelect} = useContext(RecipeContext)


    function handleChange(changes){

        // created a new object instead of changing to the state directly
        handleRecipeChange(recipe.id, { ...recipe, ...changes}) 

        // handleChange({ name: 'NewNew Name'})
    }
    function handleIngredientChange(id, ingredientChange){

        const newIngredients=[...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
    
        newIngredients[index]=ingredientChange
    
        handleChange({ ingredients : newIngredients})
    }

    function handleIngredientAdd(changes){
        const newIngredient =
        {
            id: uuidv4(),
            name: '',
            amount: ''
        }

        handleChange({ingredients: [...recipe.ingredients,newIngredient]})
    }

    function handleIngredientDelete(id){
        handleChange({ 
            ingredients : recipe.ingredients.filter(i=> i.id !== id)
        }) 
    }




    return (
        <div>
        <div className="text-right">
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded m-1"
            onClick={()=>handleRecipeSelect(undefined)}
            >
            &times;</button>
        </div>
        <div>
        <div className="flex items-center border-b border-green-500 py-2">
            <label htmlFor="name" className="w-1/4">Name</label>
            <input type="text" name="name" id="name"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Recipe Name"
                value={recipe.name}
                onChange={(e)=> handleChange({ name: e.target.value})}
            />
            </div>
            <div className="flex items-center border-b border-green-500 py-2">
            <label htmlFor="cookTime" className="w-1/4">Cook Time</label>
            <input type="text" name="cookTime" id="cookTime"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="1:00"
                value={recipe.cookTime}
                onChange={(e)=> handleChange({ cookTime: e.target.value})}
            />
            </div>
            <div className="flex items-center border-b border-green-500 py-2">
            <label htmlFor="servings" className="w-1/4">Servings</label>
            <input type="number" name="servings" id="servings"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="3"
                value={recipe.servings}
                onChange={(e)=> handleChange({ servings: parseFloat(e.target.value) || '' })}
            />
            </div>
            <div className="flex items-center border-b border-green-500 py-2">
            <label htmlFor="instructions" className="w-1/4">Instructions</label>
            <textarea name="instructions" id="instructions"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none h-52"
            placeholder="1. XXXXX \n2. XXXX\n3. Serve XXXX on Plate"
            value={recipe.instructions}
            onChange={(e)=> handleChange({ instructions: e.target.value})}
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
                {recipe.ingredients.map(ingredient => (

                    <RecipeIngredientEdit 
                    handleIngredientChange={handleIngredientChange}
                    handleIngredientDelete={handleIngredientDelete}
                    key={ingredient.id} 
                    ingredient={ingredient}/>

                ))}

            </div>
     
        </div>
        <div className="flex justify-center p-3 m-1">   
        <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={()=>handleIngredientAdd()}
        >
        Add Ingredient</button>
        </div>
     
        </div>
    )
}
