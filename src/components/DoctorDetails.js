import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Col, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { db } from '../firebase'

export default function DoctorDetails() {
  const history = useHistory()
  const {register,handleSubmit, getValues} = useForm()

    async function submitAdmin() {
      history.push('/dashboard/Doctor')
      const values = getValues()
      const res = await db().collection('doctors').add(values)
      console.log(res)
    }

    return (
        <div>
            
            <Form onSubmit={handleSubmit(submitAdmin)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="First Name" {...register('firstname', {required:true})} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Last Name" {...register('lastname', {required:true})}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridPhoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control placeholder="Phone Number" type="text" {...register('phonenumber', {required:true})} />
                    </Form.Group>

                    <Form.Group controlId="formGridSpecialization">
                      <Form.Label>Specialization</Form.Label>
                      <Form.Control placeholder="Address" {...register('specialization', {required:true})} />
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={submitAdmin}>
                      Submit
                    </Button>
            </Form>
        </div>
    )
}