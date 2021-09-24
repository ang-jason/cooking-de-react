import React from 'react'

export default function Ingredient( {name, amount}) {
    return (
        <div className="grid grid-cols-5">
            <span>{name}</span>
            <span>{amount}</span>
        </div>
    )
}
