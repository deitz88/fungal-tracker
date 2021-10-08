import React from 'react'
import Chart from "react-google-charts";
import QuartChart from './QuartChart/QuartChart';
import PintChart from './PintChart/PintChart';


export default function GrainSpawn({ fungus }) {
    if (fungus.spawn === 'Quart') {
        return (<QuartChart fungus={fungus} />)
    } else {
        return (<PintChart fungus={fungus} />)
    }
}