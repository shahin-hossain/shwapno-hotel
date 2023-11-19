import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye } from 'react-icons/fa'

const Signup = () => {
    const { signUp, profileUpdate } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        form.reset();

        if (/^[!@#$&*-_)<>(]*[0-9]/.test(name)) {
            return setError('You can not use any symbol in your name');

        }
        else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError('Entered email is wrong');
            return;
        }

        else if (!/(?=(?:[^A-Z]*[A-Z]){2})/.test(password)) {
            setError('Please enter at least 2 Capital Letter');
            return;
        }
        else if (!/(?=[^!@#$&*]*[!@#$&*])/.test(password)) {
            setError('Please enter al least 2 Special Characters');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please Enter at least 2 numbers');
            return;
        }
        else if (!/(?=.*[a-z].*[a-z])/.test(password)) {
            setError('Please Enter at least 2 small Letter');
            return;
        }
        else if (password < 8) {
            setError('You must be enter upto 8 characters');
            return;
        }
        else if (password !== confirm) {
            setError('does not match the confirm password');
            return;
        }


        signUp(email, password)
            .then(result => {
                const loggedUser = result.user;
                profileUpdate(name)
                navigate('/')
                toast.success('Sign up successful')
                console.log(loggedUser);
            })
            .catch(error => console.error(error))
        //set name


    }
    return (
        <Container className='w-50'>
            <Form onSubmit={handleSignUp} className='border border-2 rounded p-5'>
                <h2 className='text-center mb-3'>Crate a New Account</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name:</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <div>
                        <Form.Control type={show ? 'text' : 'password'} name='confirm' placeholder="Confirm Password" />
                        <p onClick={() => setShow(!show)} className='btn'><FaEye /></p>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                <Form.Text className='d-block text-center mt-3'>Have already account? Please <Link to='/login'>Login</Link></Form.Text>
                <p className='text-danger text-center mt-3'><small>{error}</small></p>
            </Form>
            <Toaster />
        </Container>
    );
};

export default Signup;