import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../store/store';
import { modalAnimation } from './animations';
import { BoxModal, BoxShadow, Background, ButtonContainer } from './styles';

const Modal = ({ children, button, type }: any) => {
  const ui = useSelector((state: RootStore) => state.ui);
  const [openModal, setOpenModal] = useState<boolean>(ui[type]);
  const showHideModal = modalAnimation(openModal);

  return (
    <div>
      {/* <ButtonContainer onClick={() => setOpenModal(true)}>
        {button}
      </ButtonContainer> */}

      <BoxModal style={showHideModal}>
        <BoxShadow>{children}</BoxShadow>
      </BoxModal>

      <Background style={showHideModal} onClick={() => setOpenModal(false)} />
    </div>
  );
};

export default Modal;
