import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../store/store';
import { modalAnimation } from './animations';
import { BoxModal, BoxShadow, Background, ButtonContainer } from './styles';

const Modal = ({ children, button, open }: any) => {
  const ui = useSelector((state: RootStore) => state.ui);
  const [openModal, setOpenModal] = useState<boolean>(open);
  console.log('open', openModal);
  // setOpenModal(open);
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
