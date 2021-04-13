import React, { useState } from 'react'
import { Form } from 'react-bootstrap' 
import AdminDetails from './AdminDetails'
import PatientDetails from './PatientDetails'
import HospitalDetails from './HospitalDetails'
import CollegeDetails from './CollegeDetails'


export default function Details() { 
    let [type, setType] = useState('')

    return (
        <div>
            <Form>
                <Form.Group controlId="formGridState">
                    <Form.Label>Who are you</Form.Label>
                    <Form.Control as="select"onChange={(e) => setType(e.target.value)} >
                      <option selected disabled>I am</option>
                      <option>Admin</option>
                      <option>Patient</option>
                      <option>Hospital</option>
                      <option>College</option>
                    </Form.Control>
                </Form.Group>
                {type === 'Admin' && <AdminDetails />}
                {type === 'Patient' && <PatientDetails />}
                {type === 'Hospital' && <HospitalDetails />}
                {type === 'College' && <CollegeDetails />}
            </Form>
        </div>
    )
}