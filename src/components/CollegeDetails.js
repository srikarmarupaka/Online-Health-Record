import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

export default function College() {
    const history = useHistory()

    function submitAdmin() {
        history.push('/dashboard/College')
    }
    return (
        <div>
            
            <Form>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Phone Number</Form.Label>
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
