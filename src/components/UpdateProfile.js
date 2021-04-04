import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function LoginSignup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    
    function handleSubmit(e) {
        e.preventDefault()

        const promises = [];
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (emailRef.current.value !== currentUser.password || emailRef.current.value !== '') {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update profile')
        }).finally(() => {
            setLoading(false)
        })
        try {
            setError('');
            setLoading(true);
            // await updateProfile(emailRef.current.value, passwordRef.current.value)
            setSuccess('Yay! Login Successful')
            history.push('/')
        } catch (err) {
            setError('Failed to create an account');
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{ error }</Alert>}
                    {success && <Alert variant="success">{ success }</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" required />
                        </Form.Group>
                        <Button className="w-100" type="submit" onClick={handleSubmit} >Update Profile</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </div>
    )
}

export default LoginSignup
