import React from 'react';
import { useForm } from '../../../hooks/useForm';
import { Input, Form, Button, RegisterContainer } from './styles';

const FormRegister: React.FC = () => {
  const { formValues, handleInputChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = formValues;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <RegisterContainer>
      <h2>Sign Up</h2>
      <p>It’s quick and easy.</p>
      <Form onSubmit={handleSubmit}>
        <Input
          width={48.5}
          type='text'
          placeholder='First name'
          name='firstName'
          value={firstName}
          onChange={handleInputChange}
        />
        <Input
          width={48.5}
          type='text'
          placeholder='Last name'
          name='lastName'
          value={lastName}
          onChange={handleInputChange}
        />
        <Input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
        <Input
          type='password'
          placeholder='New password'
          name='password'
          value={password}
          onChange={handleInputChange}
          autoComplete='false'
        />
        <Button type='submit' value='Sign Up' />
      </Form>
    </RegisterContainer>
  );
};

export default FormRegister;
