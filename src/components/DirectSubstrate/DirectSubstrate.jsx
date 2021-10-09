import React from 'react'
import Chart from "react-google-charts";
import './DirectSubstrate.css'

export default function DirectSubstrate({ fungus }) {
    const newDate = fungus.created.toString()
    const origyear = parseInt(newDate.substring(0, 4))
    const origmonth = parseInt(newDate.substring(5, 7))
    const origday = parseInt(newDate.substring(8, 10)) - 1


    // quart
    // let test = fungus.created
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
                        `${fungus.name} (${fungus.type})`,
                        'Substrate Colonization',
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