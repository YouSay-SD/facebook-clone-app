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
    // isPasswordValid: true,
  });

  useEffect(() => {
    setValid({
      ...valid,
      isEmailValid: email.length > 1,
    });
  }, [setValid]);

  // const { isEmailValid, isPasswordValid, isAllValid } = valid;

  // const isFormValid = () => {
  //   console.log(validator.isEmail(email));
  //   console.log(password.trim().length > 5);
  //   console.log(validator.isEmail(email) && password.trim().length > 5);

  //   setValid({
  //     ...valid,
  //     isEmailValid: validator.isEmail(email),
  //     isPasswordValid: password.trim().length > 5,
  //     isAllValid: validator.isEmail(email) && password.trim().length > 5,
  //   });

  //   // console.log(valid);
  //   // return isAllValid;
  // };

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();

    // setValid({
    //   ...valid,
    //   isEmailValid: validator.isEmail(email),
    //   isPasswordValid: password.trim().length > 5,
    //   isAllValid: validator.isEmail(email) && password.trim().length > 5,
    // });

    // const isEmail = new Promise((resolve, reject) => {
    //   if (validator.isEmail(email)) {
    //     resolve(true);
    //   } else {
    //     // eslint-disable-next-line prefer-promise-reject-errors
    //     reject(false);
    //   }
    // });

    // isEmail.then((res) => {
    //   setValid({
    //     ...valid,
    //     isEmailValid: res,
    //     // isPasswordValid: password.trim().length > 5,
    //   });
    // });

    console.log('console', email.length > 1);
    // const isE = email.length > 1;
    setValid({
      ...valid,
      isEmailValid: validator.isEmail(email),
      // isPasswordValid: password.trim().length > 5,
    });

    // console.log(valid);
    // if (isFormValid()) {
    //   console.log('Form Correcto');
    // }
  };
  // console.log(valid);
  console.log('renderizo');

  // const test = () => {
  //   console.log(email);
  //   setValid({
  //     ...valid,
  //     isEmailValid: email.length > 1,
  //     // isPasswordValid: password.trim().length > 5,
  //   });
  // };

  // useEffect(() => {
  //   test();
  // }, []);

  // console.log(valid);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='email'
        placeholder='Email or Phone Number'
        name='email'
        value={email}
        onChange={handleInputChange}
        // validate='false'
      />
      {/* {!isEmailValid && 'Error Email'} */}
      <Input
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={handleInputChange}
        autoComplete='false'
      />
      {/* {!isPasswordValid && 'Error Password'} */}

      <Button type='submit' value='Log In' />
      <Archor>
        <a href='/'>Forgot Password?</a>
      </Archor>
    </Form>
  );
};

export default FormLogin;
