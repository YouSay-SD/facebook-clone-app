import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { modalAnimation } from './animations';
import { BoxModal, BoxShadow, Background, ButtonContainer } from './styles';

const Modal = ({ children, button, open = false }: any) => {
  console.log('open', open);
  const [openModal, setOpenModal] = useState<boolean>(open);
  // setOpenModal(open);
  const showHideModal = modalAnimation(openModal);
  console.log('openModal', openModal);

  // useEffect(() => {
  //   console.log('ussefect open');
  //   setOpenModal(open);
  // }, [open, setOpenModal]);

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
