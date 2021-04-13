import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Col, Button } from 'react-bootstrap'

export default function PatientDetails() {
    const history = useHistory()

    function submitAdmin() {
        history.push('/dashboard/Patient')
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
