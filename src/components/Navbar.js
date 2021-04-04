import React from 'react'
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';

function navbar() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><strong>Digital Health Records</strong></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" active>Home</Nav.Link>
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="danger">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar
