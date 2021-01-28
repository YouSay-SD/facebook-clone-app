import React from 'react';
import FormLogin from '../FormLogin';
import Modal from '../Modal';
import {
  LogoContainer,
  LogoDescription,
  Logo,
  FormContainer,
  LoginContainer,
  Button,
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
              <Button type='button'>
                Create New Account
              </Button>
            }
          >
            <div>asdsadas</div>
          </Modal>
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default LoginContent;
