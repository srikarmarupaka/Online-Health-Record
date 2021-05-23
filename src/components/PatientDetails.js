import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Col, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { db } from '../firebase'

export default function PatientDetails() {
  const history = useHistory()
  const {register,handleSubmit, getValues} = useForm()

    async function submitPatient() {
      // history.push('/dashboard/Patient')
      const values = getValues()
      const res = await db.collection('patients').add(values)
      console.log(res)
      if(res) history.push('/dashboard/Patient')
      console.log('Added document with ID: ', res);
    }
    return (
        <div>
            
            <Form onSubmit={handleSubmit(submitPatient)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="First Name" {...register('firstname', {required:true})} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Last Name" {...register('lastname', {required:true})}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control placeholder="Phone Number" type="text" {...register('phonenumber', {required:true})} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="Address" {...register('address', {required:true})} />
                    </Form.Group>

                    <Button variant="success" type="submit">
                      Submit
                    </Button>
            </Form>
        </div>
    )
}
