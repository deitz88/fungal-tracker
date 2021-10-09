import React from 'react'
import Chart from "react-google-charts";
import './QuartChart.css'


export default function QuartChart({ fungus }) {

    const newDate = fungus.created.toString()
    const origyear = parseInt(newDate.substring(0, 4))
    const origmonth = parseInt(newDate.substring(5, 7))
    const origday = parseInt(newDate.substring(8, 10)) - 1


    // quart
    // let test = fungus.created
    let d = new Date(fungus.created)
    let phase2 = d.setDate(d.getDate(fungus.created) + 45)

    let initialColonization = new Date(phase2)
    //quart finish dates
    let colMonth = initialColonization.getMonth() + 1
    let colYear = initialColonization.getFullYear()
    let colDay = initialColonization.getDate()

    // fruiting estimate
    let d2 = new Date(initialColonization)
    let phase3 = d2.setDate(d2.getDate(initialColonization) + 20)
    let rdy = new Date(phase3)
    let rdyMonth = rdy.getMonth() + 1
    let rdyYear = rdy.getFullYear()
    let rdyDay = rdy.getDate()

    // first fruit
    let d3 = new Date(rdy)
    let final = d3.setDate(d3.getDate(rdy) + 7)
    let fruit = new Date(final)
    let fruitMonth = fruit.getMonth() + 1
    let fruitYear = fruit.getFullYear()
    let fruitDay = fruit.getDate()

    let totalDays = `${fruitMonth}.${fruitDay}.${fruitYear}`


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
                        'Germination',
                        new Date(origyear, origmonth, origday),
                        new Date(colYear, colMonth, colDay),
                    ],
                    [
                        `${fungus.name} (${fungus.type})`,
                        'Colonization',
                        new Date(colYear, colMonth, colDay),
                        new Date(rdyYear, rdyMonth, rdyDay)
                    ],
                    [
                        `${fungus.name} (${fungus.type})`,
                        'Average Fruiting Time',
                        new Date(rdyYear, rdyMonth, rdyDay),
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
            <div id='countCont'>
                <h6 id='countLabel'>{totalDays}</h6>
            </div>
        </div>
    )
}