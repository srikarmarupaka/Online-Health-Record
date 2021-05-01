import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
// import db from '../contexts/dbContext'
import { db } from '../firebase'

export default function AdminDetails() { 
  const history = useHistory()
  const {register, handleSubmit, getValues} = useForm()
    async function submitAdmin() {
      history.push('/dashboard/admin')
      const values = getValues()      
      console.log(values)
      const res = await db.collection('administration').add(values);
      console.log('Added document with ID: ', res);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(submitAdmin)}>
                    <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="First Name" {...register('firstname',{required:true})} />
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Last Name" {...register('lastname',{required:true})} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" {...register('email',{required:true})} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control placeholder="Phone Number" type="text" {...register('phone', { required: true })} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="Address" {...register('address', { required: true })} />
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={submitAdmin}>
                      Submit
                    </Button>
            </Form>
        </div>
    )
}
