import React, { useState } from 'react'
import './FungusCard.css'
import Chart from "react-google-charts";
import GrainSpawn from '../GrainSpawn/GrainSpawn';
import DirectSubstrate from '../../components/DirectSubstrate/DirectSubstrate'


export default function FungusCard({ fungus, getFungus }) {
    // quart 4-6 weeks, pint 3-5 weeks, colonization time 2-3 weeks
    const [test, setTest] = useState('')

    if (fungus.spawn === "Quart" || fungus.spawn === 'Pint') {
        return (<GrainSpawn getFungus={getFungus} fungus={fungus} />)
    } else if (fungus.spawn === "Direct Substrate") {
        return (<DirectSubstrate setTest={setTest} getFungus={getFungus} fungus={fungus} />)
    } else {
        return (
            <h1>test</h1>
        )
    }

}