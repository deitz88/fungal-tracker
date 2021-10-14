import React, { useState, useEffect } from 'react'
import './Main.css'
import fungusService from '../../utils/fungusService'
import { Grid, Loader, Segment } from 'semantic-ui-react'
import FungusCard from '../../components/FungusCard/FungusCard'

export default function Main({ user }) {

    const [fungus, setFungus] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function getFungus() {
        try {
            const data = await fungusService.getAllFungus()
            console.log(data)
            setLoading(false);
            setFungus(data)
        } catch (err) {
            setError(
                "error loading user fungus"
            );
        }
    }

    async function handleDelete() {
        await fungusService.deleteFungus(fungus._id)
        getFungus()
    }

    useEffect(() => {
        getFungus();
    }, []);

    if (error) {
        // history.push('/404')
        return (<h1>{error}</h1>);
    }
    if (loading) {
        return (
            <Grid
                textAlign="center"
                style={{ height: "65vh" }}
                verticalAlign="middle"
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Loader size="large" active>
                        Loading
                    </Loader>
                </Grid.Column>
            </Grid>
        );
    }
    if (!fungus.fungus) {
        return (
            <>
                <h3>Fungus Dashboard</h3>
                <div id='contentCont'>
                    <h3>Nothing to display</h3>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div id='contentCont'>
                    <Segment>
                        <h3> Fungus Dashboard </h3>
                        {fungus.fungus.map((oneFungus, i) => {
                            return (
                                <FungusCard getFungus={getFungus} fungus={oneFungus} key={i} />
                            )
                        })
                        }
                    </Segment>
                    <div id='labelTitle'>
                        <h6 id='firstLevelLabelText'>1st Fruiting</h6>
                        <h6>(Est.)</h6>
                    </div>


                </div>
            </>
        )
    }
}