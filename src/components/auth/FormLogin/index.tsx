import React, { useState } from 'react';
import validator from 'validator';
import { Form, Button, Input, Archor } from './styles';
import { useForm } from '../../../hooks/useForm';
import { FormData, FormElement } from './interface';

const FormLogin: React.FC = () => {
  const { formValues, handleInputChange } = useForm<FormData>({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const [errorMsg, setMsgError] = useState({
    errorMsgEmail: '',
    errorMsgPassword: '',
    hasMsgError: true,
  });

  const { errorMsgEmail, errorMsgPassword, hasMsgError } = errorMsg;

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      setMsgError({
        ...errorMsg,
        errorMsgEmail: 'Email is not valid',
      });
      console.log('email');
      return false;
    }
    setMsgError({
      ...errorMsg,
      errorMsgEmail: '',
    });

    if (password.trim().length < 5) {
      setMsgError({
        ...errorMsg,
        errorMsgPassword: 'The password must have more than 5 characters',
      });
      console.log('password');
      return false;
    }

    setMsgError({
      ...errorMsg,
      errorMsgPassword: '',
      hasMsgError: false,
    });

    console.log(hasMsgError);
    // return false;
    // return errorMsg.length > 0;
    return hasMsgError;
  };

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log('Form Correcto');
    }
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
      {errorMsgEmail ? 'Error Email' : ''}
      <Input
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={handleInputChange}
        autoComplete='false'
      />
      {errorMsgPassword ? 'Error Password' : ''}

      <Button type='submit' value='Log In' />
      <Archor>
        <a href='/'>Forgot Password?</a>
      </Archor>
    </Form>
  );
};

export default FormLogin;
