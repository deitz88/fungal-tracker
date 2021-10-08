import React from 'react'
import './FungusCard.css'
import Chart from "react-google-charts";
import GrainSpawn from '../GrainSpawn/GrainSpawn';
import DirectSubstrate from '../../components/DirectSubstrate/DirectSubstrate'

export default function FungusCard({ fungus }) {
    console.log(fungus.spawn)
    // quart 4-6 weeks, pint 3-5 weeks, colonization time 2-3 weeks


    if (fungus.spawn === "Quart" || fungus.spawn === 'Pint') {
        return (<GrainSpawn fungus={fungus} />)
    } else if (fungus.spawn === "Direct Substrate") {
        return (<DirectSubstrate fungus={fungus} />)
    } else {
        return (
            <h1>test</h1>
        )
    }

}