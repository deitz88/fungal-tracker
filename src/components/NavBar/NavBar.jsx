import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { Segment, Header, Image } from "semantic-ui-react";


export default function NavBar({ user, handleSignUpOrLogin, handleLogout }) {

    return user ? (
        <Segment id='navCont' clearing className='navContainer'>
            <Header as="h2" floated="left">
                <Link to="/">
                    <Image
                        className="headerLogo"
                        src="https://i.imgur.com/qbuFrl8.png"
                        size="mini"
                    ></Image>
                </Link>
            </Header>
            <Header as='h3' floated='right'>
                <Link to="" onClick={handleLogout}>
                    <span className="logoutText">Logout</span>
                </Link>
            </Header>
            {/* <div id='navList'> */}
            <Header id='navListItem' as='h3'>
                <Link to='/index'>Index </Link>
            </Header>
            <Header id='navListItem' as='h3'>
                <Link to='/addfungus'>Add Fungus </Link>
            </Header>
            {/* </div> */}
        </Segment>

    ) : (
        <Segment id='navCont' clearing className='navContainer'>
            <Header as="h2" floated="left">
                <Link to="/">
                    <Image
                        className="headerLogo"
                        src="https://i.imgur.com/qbuFrl8.png"
                        size="mini"
                    ></Image>
                </Link>
            </Header>
            <Header as="h3" floated="right">
                <Link to="/login">
                    <span className="logoutText">Login</span>
                </Link>
            </Header>
        </Segment>
    )
}