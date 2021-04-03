import React, {useRef} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

function LoginSignup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    
    function handleSubmit(e) {
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <div>
            <Card>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={ emailRef } required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={ passwordRef } required />
                    </Form.Group>
                    <Button className="w-100" type="submit" onClick={handleSubmit} >Sign Up</Button>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Login
            </div>
        </div>
    )
}

export default LoginSignup
