import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


export default function AdminDetails() { 
    const history = useHistory()
    let [type, setType] = useState('')

    function submitAdmin() {
        history.push('/dashboard/admin')
    }
    return (
        <div>
            <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Phone Numeber</Form.Label>
                      <Form.Control placeholder="Phone Number" type="text" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="Address" />
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={submitAdmin}>
                      Submit
                    </Button>
            </Form>
        </div>
    )
}
