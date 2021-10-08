import React from 'react'
import './FungusCard.css'
import Chart from "react-google-charts";

export default function FungusCard({ fungus }) {
    // quart 4-6 weeks, pint 3-5 weeks, colonization time 2-3 weeks

    // orig
    const newDate = fungus.created.toString()
    const origyear = parseInt(newDate.substring(0, 4))
    const origmonth = parseInt(newDate.substring(5, 7))
    const origday = parseInt(newDate.substring(8, 10)) - 1


    // quart
    // let test = fungus.created
    let d = new Date(fungus.created)
    let phase2 = d.setDate(d.getDate(fungus.created) + 45)
    let initialColonization = new Date(phase2)
    console.log(initialColonization)

    return (
        <>
            <Chart
                width={'100%'}
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
                        `${fungus.type} (${fungus.name})`,
                        'Germination',
                        new Date(origyear, origmonth, origday),
                        new Date(2022, 3, 4),
                    ],
                    [
                        `${fungus.type} (${fungus.name})`,
                        'Colonization',
                        new Date(1797, 2, 4),
                        new Date(1801, 2, 4)
                    ],
                    [
                        `${fungus.type} (${fungus.name})`,
                        'Average Fruiting Time',
                        new Date(1801, 2, 4),
                        new Date(1809, 2, 4),
                    ],

                ]}
                options={{
                    colors: ['#cbb69d', '#603913', '#c69c6e'],
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
        </>
    )
}