import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { db } from '../firebase'

export default function Hospital() {
    const history = useHistory()
    const {register, handleSubmit, getValues} = useForm()

    async function submitAdmin() {
      history.push('/dashboard/hospital')
      const values = getValues()      
      console.log(values)
      const res = await db.collection('hospitals').add(values);
      console.log('Added document with ID: ', res);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(submitAdmin)}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" {...register('name', { required: true })} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control placeholder="Phone Number" type="text" {...register('phonenumber', { required: true })} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
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
