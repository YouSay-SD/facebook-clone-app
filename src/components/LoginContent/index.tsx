import React from 'react';
import FormLogin from '../FormLogin';
import {
  LogoContainer,
  LogoDescription,
  Logo,
  FormContainer,
  LoginContainer,
} from './styles';

const LoginContent: React.FC = () => {
  return (
    <>
      <LoginContainer>
        <LogoContainer>
          <Logo src='./img/logo/logo.svg' />
          <LogoDescription>
            Connect with friends and the world
            around you on Facebook.
          </LogoDescription>
        </LogoContainer>
        <FormContainer>
          <FormLogin />
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default LoginContent;
