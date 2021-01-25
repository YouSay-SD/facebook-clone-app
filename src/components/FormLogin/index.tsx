import React from 'react';
import { Form, Button, Input } from './styles';

const FormLogin: React.FC = () => {
  return (
    <Form>
      <Input
        type='text'
        placeholder='Email or Phone Number'
      />
      <Input
        type='password'
        placeholder='Password'
      />
      <Button type='submit' value='Log In' />
      <a href='/'>Forgot Password?</a>
    </Form>
  );
};

export default FormLogin;
