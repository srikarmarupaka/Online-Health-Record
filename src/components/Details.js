import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import AdminDetails from './AdminDetails'


export default function Details() { 
    let [type, setType] = useState('')

    return (
        <div>
            <Form>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>You are</Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." onChange={(e)=>setType(e.target.value)} >
                      <option>Admin</option>
                      <option>Patient</option>
                      <option>Hospital</option>
                      <option>College</option>
                    </Form.Control>
                </Form.Group>
                {type === 'Admin' ? (
                    <AdminDetails />
                ) : ('')}
            </Form>
        </div>
    )
}