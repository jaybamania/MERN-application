import React, { useContext } from 'react'
import { 
    // Button,
    Navbar,
    Nav,
    // Form,
    // FormControl,
     } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { UserContext } from '../App';



const Navbars = () => {

    const {state} = useContext(UserContext)
    console.log(state)
    const RenderTabs = ()=>{
        return(
            <Nav className="ml-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                {
                    state? <NavLink className="nav-link" to="/logout">Logout</NavLink> :
                    <>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" to="/signup">Registeration</NavLink>
                    </>
                } 
                </Nav>
        )
    }
    return (
        <>
        <Navbar collapseOnSelect expand="md" shadow bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <RenderTabs />
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav> */}
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Navbars
