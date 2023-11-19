import React, { useContext, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
const Login = () => {
    const { signIn, googleLogin, facebookLogin, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef(null)


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(location.state?.from?.pathname || '/')
                toast.success('Login Successful')
            })
            .catch(error => console.error(error))

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(location.state?.from?.pathname || '/')
                toast.success('Login Successful')
            })
            .catch(error => console.error(error))
    }
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(location.state?.from?.pathname || '/')
                toast.success('Login Successful')
            })
            .catch(error => console.error(error))
    }
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        resetPassword(email)
            .then(() => {
                toast.success('Sent mail')
            })
            .catch(error => console.error(error))

    }
    return (
        <Container className='w-25'>
            <Form onSubmit={handleLogin} className='border border-2 rounded px-4 py-3'>
                <h2 className='text-center'>Login </h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={handleResetPassword} variant="primary">
                    Forget Password
                </Button>
                <Form.Text className='d-block text-center'><small>New in Shawpno? please <Link to='/signup'>Register</Link></small></Form.Text>
                <hr />
                <Button onClick={handleGoogleLogin} variant='light' className='d-block mt-4 ms-4 border border-primary'><span className='text-primary'><FaGoogle className='me-2' /> </span> Continue with Google</Button>
                <Button onClick={handleFacebookLogin} variant='light' className='d-block mt-4 ms-3 border border-primary'><span className='text-primary'><FaFacebookF className='me-2' /> </span> Continue with FaceBook</Button>
                <Button variant='light' className='d-block mt-4 ms-3 border border-primary'><span className='text-primary'><FaGithub className='me-2' /> </span> Continue with Github</Button>

            </Form>
        </Container>
    );
};

export default Login;