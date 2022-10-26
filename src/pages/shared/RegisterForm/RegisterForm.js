import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
   const [error, setError] = useState('')

    const handleSubmitForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const firstName = form.first.value;
        const lastName = form.last.value;
        const photoURL = form.photo.value;
        const fullName = (`${firstName} ${lastName}`);
        

    }

    return (
       <div className="w-50 mx-auto mt-5 login-form">
        <h3 className="login-title text-center">Registration Form</h3>
         <Form onSubmit={handleSubmitForm}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="first"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="last"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="photo"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>
          <div className="mb-3">
          <span>Already have an account <Link to="/user/login">Login</Link> </span>
          </div>
          <Button variant="primary" type="submit">
            Register
          </Button>
          
        </Form>
       </div>
      );
};

export default RegisterForm;