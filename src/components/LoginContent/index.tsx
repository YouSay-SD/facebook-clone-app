import React from 'react';
import FormLogin from '../FormLogin';
import Modal from '../Modal';
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
          <Modal
            button={
              <button type='button'>
                Share Result & leave a message
              </button>
            }
          />
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default LoginContent;
