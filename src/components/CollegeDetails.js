import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { db } from '../firebase'

export default function College() {
  const history = useHistory()
  const { register, handleSubmit, getValues } = useForm();

    async function submitColleges() {
      history.push('/dashboard/College')
      const values = getValues()
      const res = await db.collection('colleges').add(values)
      console.log('Added document with ID: ', res);
    }
  
    return (
        <div>
            <Form onSubmit={handleSubmit(submitColleges)}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" {...register('name', {required: true})} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control placeholder="Phone Number" type="text" {...register('name', {required: true})} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="Address" {...register('name', {required: true})} />
                    </Form.Group>

                    <Button variant="success" type="submit" >
                      Submit
                    </Button>
            </Form>
        </div>
    )
}
