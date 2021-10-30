import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} =useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">TravelTheWorld</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#ourguides">Our Guides</Nav.Link>
                        <Nav.Link as={Link} to="/booking">Bookings</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut}  variant="danger">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text className="ms-2">   
                           { user.email && `Signed in as:` }<a className="ms-2" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;