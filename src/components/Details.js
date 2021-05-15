import React, { useState } from 'react'
import { Form } from 'react-bootstrap' 
import AdminDetails from './AdminDetails'
import PatientDetails from './PatientDetails'
import HospitalDetails from './HospitalDetails'
import CollegeDetails from './CollegeDetails'
import DoctorDetails from './DoctorDetails'


export default function Details() { 
    let [type, setType] = useState('I am')

    return (
        <div>
            <Form>
                <Form.Group controlId="formGridState">
                    <Form.Label>Who are you</Form.Label>
                    <Form.Control as="select" onChange={(e) => setType(e.target.value)} defaultValue={type} >
                      <option disabled>I am</option>
                      <option>Admin</option>
                      <option>Patient</option>
                      <option>Hospital</option>
                      <option>College</option>
                      <option>Doctor</option>
                    </Form.Control>
                </Form.Group>
            </Form>
                {type === 'Admin' && <AdminDetails />}
                {type === 'Patient' && <PatientDetails />}
                {type === 'Hospital' && <HospitalDetails />}
                {type === 'College' && <CollegeDetails />}
                {type === 'Doctor' && <DoctorDetails />}
        </div>
    )
}