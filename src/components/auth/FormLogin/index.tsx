import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, ButtonGoogle, Archor } from './styles';
import { FormData } from './interface';
import { Input, Alert } from '../../form';
import { RootStore } from '../../../store/store';
import { startLoginEmailPassword } from '../../../actions/auth/auth';

const FormLogin: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootStore) => state.ui);
  const { register, errors, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(
    ({ email, password }: FormData, { target }: any) => {
      target.reset();
      dispatch(startLoginEmailPassword(email, password));
    }
  );

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type='email'
        placeholder='Email or Phone Number'
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
      />
      {errors?.email && <Alert>{errors?.email?.message}</Alert>}

      <Input
        type='password'
        placeholder='Password'
        name='password'
        border
        autoComplete='false'
        innerRef={register({
          required: {
            value: true,
            message: 'Password is required',
          },
        })}
      />
      {errors?.password && <Alert>{errors?.password?.message}</Alert>}

      <Button type='submit' value='Log In' disabled={loading} />
      {/* <ButtonGoogle onClick={handleGoogleLogin}>
        <img src='./img/icons/google.svg' alt='Google Sign Up' />
        Sign up with Google
      </ButtonGoogle> */}
      <Archor>
        <a href='/'>Forgot Password?</a>
      </Archor>
    </Form>
  );
};

export default FormLogin;
