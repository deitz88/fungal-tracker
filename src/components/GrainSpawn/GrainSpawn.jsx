import React from 'react'
import Chart from "react-google-charts";
import QuartChart from './QuartChart/QuartChart';
import PintChart from './PintChart/PintChart';


export default function GrainSpawn({ fungus, getFungus, handleDelete }) {
    console.log(fungus.spawn)
    if (fungus.spawn === 'Quart') {
        return (<QuartChart getFungus={getFungus} fungus={fungus} handleDelete={handleDelete} />)
    } else {
        return (<PintChart getFungus={getFungus} fungus={fungus} handleDelete={handleDelete} />)
    }
}