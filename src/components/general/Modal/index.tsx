import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../store/store';
import { modalAnimation } from './animations';
import { uiOpenModal, uiCloseModal } from '../../../actions/ui/ui';

import { Box, Background, ButtonContainer } from './styles';

const Modal = ({ children, button }: any) => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state: RootStore) => state.ui);
  const showHideModal = modalAnimation(modalOpen);

  return (
    <div>
      <ButtonContainer onClick={() => dispatch(uiOpenModal())}>
        {button}
      </ButtonContainer>

      <Box style={showHideModal}>{children}</Box>

      <Background
        style={showHideModal}
        onClick={() => dispatch(uiCloseModal())}
      />
    </div>
  );
};

export default Modal;
