import React, { useEffect, useState } from 'react';
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

  const [valid, setValid] = useState({
    isEmailValid: true,
    isPasswordValid: true,
    isAllValid: true,
  });

  const { isEmailValid, isPasswordValid, isAllValid } = valid;

  useEffect(() => {
    setValid({
      ...valid,
      isAllValid: isEmailValid && isPasswordValid,
    });
  }, []);

  const isFormValid = async () => {
    setValid({
      ...valid,
      isEmailValid: validator.isEmail(email),
      isPasswordValid: password.trim().length > 5,
      isAllValid: validator.isEmail(email) && isEmailValid && isPasswordValid,
    });

    console.log(validator.isEmail(email));
    console.log(password.trim().length > 5);
    console.log(validator.isEmail(email) && isEmailValid && isPasswordValid);

    console.log(valid);
    // return isAllValid;
  };

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    isFormValid();
    // if (isFormValid()) {
    //   console.log('Form Correcto');
    // }
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
      {!isEmailValid && 'Error Email'}
      <Input
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={handleInputChange}
        autoComplete='false'
      />
      {!isPasswordValid && 'Error Password'}

      <Button type='submit' value='Log In' />
      <Archor>
        <a href='/'>Forgot Password?</a>
      </Archor>
    </Form>
  );
};

export default FormLogin;
