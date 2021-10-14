import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from "react-google-charts";
import './DirectSubstrate.css'
import fungusService from '../../utils/fungusService';
import ContextMenu from 'react-context-menu';

export default function DirectSubstrate({ getFungus, fungus, handleDelete }) {

    const newDate = fungus.created.toString()
    const origyear = parseInt(newDate.substring(0, 4))
    const origmonth = parseInt(newDate.substring(5, 7))
    const origday = parseInt(newDate.substring(8, 10)) - 1


    // quart
    let d = new Date(fungus.created)
    let phase2 = d.setDate(d.getDate(fungus.created) + 20)
    let initialColonization = new Date(phase2)
    //quart finish dates
    let colMonth = initialColonization.getMonth() + 1
    let colYear = initialColonization.getFullYear()
    let colDay = initialColonization.getDate()

    let d2 = new Date(phase2)
    let final = d2.setDate(d2.getDate(phase2) + 7)
    let fruit = new Date(final)
    let fruitMonth = fruit.getMonth() + 1
    let fruitYear = fruit.getFullYear()
    let fruitDay = fruit.getDate()

    let totalDays = `${fruitMonth}.${fruitDay}.${fruitYear}`

    async function handleDelete() {
        await fungusService.deleteFungus(fungus._id)
        getFungus()
    }



    return (
        <div id='chartCont'>

            <Chart
                width={'95%'}
                height={'7em'}
                chartType="Timeline"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        { type: 'string', id: 'Position' },
                        { type: 'string', id: 'Name' },
                        { type: 'date', id: 'Start' },
                        { type: 'date', id: 'End' },
                    ],
                    [
                        `${fungus.name} (${fungus.type})`,
                        `Col. through ${colMonth}.${colDay}.${colYear}`,
                        new Date(origyear, origmonth, origday),
                        new Date(colYear, colMonth, colDay),
                    ],
                    [
                        `${fungus.name} (${fungus.type})`,
                        'Est. Fruit',
                        new Date(colYear, colMonth, colDay),
                        new Date(fruitYear, fruitMonth, fruitDay),
                    ],

                ]}
                options={{
                    colors: ['#603913', '#c69c6e'],
                    timeline: {
                        rowLabelStyle: {
                            fontName: 'Helvetica',
                            fontSize: 12,
                            color: '#603913',
                        },
                        barLabelStyle: { fontName: 'Garamond', fontSize: 10 },
                    },
                }}
                rootProps={{ 'data-testid': '3' }}

            />






            <div id='countCont'>
                <h6 id='countLabel'>{totalDays}</h6>
            </div>
            <div id='deleteCont'>
                <Link onClick={handleDelete}>
                    <h6>X</h6>
                </Link>
            </div>

        </div>
    )
}