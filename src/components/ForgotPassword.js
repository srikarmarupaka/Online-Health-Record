import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ForgotPassword() {
    const emailRef = useRef()
    const { forgotPassword } = useAuth()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('');
            setLoading(true);
            await forgotPassword(emailRef.current.value)
            setSuccess('Password reset link sent to your email')
        } catch (err) {
            setError('Failed send reset link');
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{ error }</Alert>}
                    {success && <Alert variant="success">{ success }</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={ emailRef } required />
                        </Form.Group>
                        <Button className="w-100" type="submit" onClick={handleSubmit} >Reset Password</Button>
                        <div className="w-100 text-center mt-2">
                            Password remembered ? <Link to="/login">Login</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Not a prior user? <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default ForgotPassword