import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Input, Archor } from './styles';
import { FormData, FormElement } from './interface';

const FormLogin: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormData>();

  const onSubmit = ({ email, password }: FormData) => {
    console.log(email, password);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='email'
        placeholder='Email or Phone Number'
        name='email'
        ref={register({ required: true })}
      />
      {errors.email && 'Enter your email'}
      <Input
        type='password'
        placeholder='Password'
        name='password'
        ref={register({ required: true })}
        autoComplete='false'
      />
      {errors.email && 'Enter your password'}
      <Button type='submit' value='Log In' />
      <Archor>
        <a href='/'>Forgot Password?</a>
      </Archor>
    </Form>
  );
};

export default FormLogin;
