import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, RegisterContainer } from './styles';
import { FormData } from './interface';
import { Alert, Input } from '../../form';

const FormRegister: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(
    ({ email, password }: FormData, { target }: any) => {
      target.reset();
    }
  );

  return (
    <RegisterContainer>
      <h2>Sign Up</h2>
      <p>It’s quick and easy.</p>
      <Form onSubmit={onSubmit}>
        <Input
          width={48.5}
          type='text'
          placeholder='First name'
          name='firstName'
          innerRef={register({
            required: {
              value: true,
              message: 'First name is required',
            },
          })}
        >
          {errors?.firstName && <Alert>{errors?.firstName?.message}</Alert>}
        </Input>

        <Input
          width={48.5}
          type='text'
          placeholder='Last name'
          name='lastName'
          innerRef={register({
            required: {
              value: true,
              message: 'Last name is required',
            },
          })}
        >
          {errors?.lastName && <Alert>{errors?.lastName?.message}</Alert>}
        </Input>

        <Input
          type='email'
          placeholder='Email'
          name='email'
          innerRef={register({
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'It must be a valid email',
            },
          })}
        >
          {errors?.email && <Alert>{errors?.email?.message}</Alert>}
        </Input>

        <Input
          type='password'
          placeholder='New password'
          name='password'
          autoComplete='false'
          innerRef={register({
            required: {
              value: true,
              message: 'Password is required',
            },
          })}
        >
          {errors?.password && <Alert>{errors?.password?.message}</Alert>}
        </Input>

        <Button type='submit' value='Sign Up' />
      </Form>
    </RegisterContainer>
  );
};

export default FormRegister;
