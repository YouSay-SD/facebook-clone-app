import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Form, Button, RegisterContainer } from './styles';
import { RegisterProps } from './interface';
import { Alert, Input } from '../../form';
import { startRegisterWithEmailPassword } from '../../../actions/auth/auth';

const FormRegister: React.FC = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm<RegisterProps>();

  const onSubmit = handleSubmit(
    ({ email, password, userName }: RegisterProps, { target }: any) => {
      target.reset();
      dispatch(startRegisterWithEmailPassword({ email, password, userName }));
    }
  );

  return (
    <RegisterContainer>
      <h2>Sign Up</h2>
      <p>It’s quick and easy.</p>
      <Form onSubmit={onSubmit}>
        <Input
          type='text'
          placeholder='User name'
          name='userName'
          border
          innerRef={register({
            required: {
              value: true,
              message: 'First name is required',
            },
          })}
        >
          {errors?.userName && <Alert>{errors?.userName?.message}</Alert>}
        </Input>

        <Input
          type='email'
          placeholder='Email'
          name='email'
          border
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
          border
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
