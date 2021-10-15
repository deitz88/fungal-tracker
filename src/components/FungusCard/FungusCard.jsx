import React, { useState } from 'react'
import './FungusCard.css'
import fungusService from '../../utils/fungusService';
import GrainSpawn from '../GrainSpawn/GrainSpawn';
import DirectSubstrate from '../../components/DirectSubstrate/DirectSubstrate'
import Straw from '../Straw/Straw';
import Log from '../Log/Log'


export default function FungusCard({ fungus, getFungus }) {
    // quart 4-6 weeks, pint 3-5 weeks, colonization time 2-3 weeks
    const [test, setTest] = useState('')


    async function handleDelete() {
        await fungusService.deleteFungus(fungus._id)
        getFungus()
    }

    if (fungus.spawn === "Quart" || fungus.spawn === 'Pint') {
        return (<GrainSpawn getFungus={getFungus} fungus={fungus} handleDelete={handleDelete} />)
    } else if (fungus.spawn === "Direct Substrate") {
        return (<DirectSubstrate setTest={setTest} getFungus={getFungus} handleDelete={handleDelete} fungus={fungus} />)
    } else if (fungus.spawn === 'Log') {
        return (<Log fungus={fungus} getFungus={getFungus} handleDelete={handleDelete} e />)
    } else if (fungus.spawn === 'Straw') {
        return (<Straw fungus={fungus} getFungus={getFungus} handleDelete={handleDelete} e />)
    } else {
        return (
            <h1>test</h1>
        )
    }

}