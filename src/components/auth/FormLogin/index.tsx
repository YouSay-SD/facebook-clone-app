import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Input, Archor } from './styles';
import { FormE, FormData } from './interface';
import Alert from '../../form/Alert';

const FormLogin: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(
    ({ email, password }: FormData, { target }: any) => {
      console.log(email, password);
      target.reset();
    }
  );

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type='email'
        placeholder='Email or Phone Number'
        name='email'
        ref={register({
          required: {
            value: true,
            message: 'Email is required',
          },
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'It must be a valid email',
          },
        })}
      />
      {errors?.email && <Alert>{errors?.email?.message}</Alert>}

      <Input
        type='password'
        placeholder='Password'
        name='password'
        autoComplete='false'
        ref={register({
          required: {
            value: true,
            message: 'Password is required',
          },
        })}
      />
      {errors?.password && <Alert>{errors?.password?.message}</Alert>}

      <Button type='submit' value='Log In' />
      <Archor>
        <a href='/'>Forgot Password?</a>
      </Archor>
    </Form>
  );
};

export default FormLogin;
