import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    const { users, logOut } = UseAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">TravelBooking</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/addservice">Add Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#offer">Offer</Nav.Link>
                        <Nav.Link as={HashLink} to="/myorder">My Order</Nav.Link>

                        {users?.email ?
                            <button onClick={logOut}>Logout</button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>

                        }


                        <Navbar.Text>
                            Signed in as: <a href="#login">{users?.displayName}</a>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;