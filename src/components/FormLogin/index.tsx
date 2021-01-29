import React from 'react';
import {
  Form,
  Button,
  Input,
  Archor,
} from './styles';
import { useForm } from '../../hooks/useForm';
import { FormElement } from './interface';

const FormLogin: React.FC = () => {
  const {
    formValues,
    handleInputChange,
  } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Email or Phone Number'
        name='email'
        value={email}
        onChange={handleInputChange}
      />
      <Input
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={handleInputChange}
      />
      <Button type='submit' value='Log In' />
      <Archor>
        <a href='/'>Forgot Password?</a>
      </Archor>
    </Form>
  );
};

export default FormLogin;
