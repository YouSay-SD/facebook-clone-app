import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../store/store';
import { modalAnimation } from './animations';
import { BoxModal, BoxShadow, Background, ButtonContainer } from './styles';

const Modal = ({ children, button, showModal, setShowModal }: any) => {
  // const ui = useSelector((state: RootStore) => state.ui);
  // const [showModal, setshowModal] = useState<boolean>(showModal);
  console.log('open', showModal);
  // setshowModal(open);
  const showHideModal = modalAnimation(showModal);

  return (
    <div>
      <ButtonContainer onClick={() => setShowModal(true)}>
        {button}
      </ButtonContainer>

      <BoxModal style={showHideModal}>
        <BoxShadow>{children}</BoxShadow>
      </BoxModal>

      <Background style={showHideModal} onClick={() => setShowModal(false)} />
    </div>
  );
};

export default Modal;
