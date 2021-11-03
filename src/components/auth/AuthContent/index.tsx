import React, { useState } from 'react';
import FormLogin from '../FormLogin';
import Modal from '../../general/Modal';
import FormRegister from '../FormRegister/index';
import {
  LogoContainer,
  LogoDescription,
  Logo,
  FormContainer,
  LoginContainer,
  Button,
} from './styles';

const AuthContent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LoginContainer>
        <LogoContainer>
          <Logo src='./img/logo/logo.svg' />
          <LogoDescription>
            Connect with friends and the world around you on Facebook.
          </LogoDescription>
        </LogoContainer>
        <FormContainer>
          <FormLogin />
          <Modal
            button={<Button type='button'>Create New Account</Button>}
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <FormRegister />
          </Modal>
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default AuthContent;
