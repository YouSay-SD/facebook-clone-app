import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modalAnimation } from './animations';
import { BoxModal, BoxShadow, Background, ButtonContainer } from './styles';

const Modal = ({ children, button }: any) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const showHideModal = modalAnimation(openModal);

  return (
    <div>
      <ButtonContainer onClick={() => setOpenModal(true)}>
        {button}
      </ButtonContainer>

      <BoxModal style={showHideModal}>
        <BoxShadow>{children}</BoxShadow>
      </BoxModal>

      <Background style={showHideModal} onClick={() => setOpenModal(false)} />
    </div>
  );
};

export default Modal;
