import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './AddFungus.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Grid, Header, Form, Segment, Dropdown, Button } from 'semantic-ui-react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

export default function AddFungus({ user }) {
    const history = useHistory();
    const [error, setError] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [type, setType] = useState('')
    const [formInput, setFormInput] = useState({
        date: startDate,
        name: '',
        type: type
    })

    const strains = [
        {
            key: "lion's main",
            text: "Lion's Main",
            value: "lion's main1"
        },
        {
            key: "oyster",
            text: "Oyster",
            value: "oyster1"
        },
        {
            key: "magic",
            text: "Magic",
            value: "magic1"
        },
    ]

    function handleInput(e) {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        if (user) {
            if (formInput.type === '' || undefined) {
                setError('Please select a strain')
            } else {
                e.preventDefault()
                console.log(formInput)
                // history.push('/index')
            }
        } else {
            history.push('/')
        }
    }

    function handleChange(e) {
        setType(e.target.innerText)
        formInput.type = e.target.innerText
    }

    function handleDateChange(date) {
        setStartDate(date)
        formInput.date = date
    }


    return (
        <>
            <Grid
                textAlign="center"
                style={{ height: "60vh" }}
                verticalAlign="middle"
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" textAlign="center">
                        <span className="signupText">Add Fungus  </span>
                    </Header>
                    <br />
                    <Form autoComplete="off" onSubmit={handleSubmit}>
                        <Segment stacked>
                            <h3>Unique Identifier</h3>
                            <Form.Input
                                type="name"
                                name="name"
                                placeholder="name, designation, or identifier"
                                value={formInput.email}
                                onChange={handleInput}
                                required
                            />
                            <h3>Strain</h3>
                            <Form.Field required>
                                <Dropdown fluid selection options={strains} onChange={handleChange} required />
                            </Form.Field>
                            <h3>Date Innoculated</h3>
                            <DatePicker popperPlacement='bottom' selected={startDate} onChange={handleDateChange} />
                            <br /><br />
                            <Button
                                color="teal"
                                fluid
                                size="large"
                                type="submit"
                                className="btn"
                                id="signupButton"
                            >
                                Add to Thingy
                            </Button>
                            <br />
                            {error ? <ErrorMessage id='errorMessageAdd' error={error} /> : null}
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </>
    )
}