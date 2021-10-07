import React from 'react'
import './FungusCard.css'

export default function FungusCard({ fungus }) {

    console.log(fungus)
    return (
        <>
            <h3>{fungus.name}</h3>
            {fungus.type} + {fungus.created}
        </>
    )
}