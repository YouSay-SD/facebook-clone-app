import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import {
  Box,
  Background,
  ButtonContainer,
} from './styles';

const Modal = ({ children, button }: any) => {
  const [openModal, setOpenModal] = useState(
    false
  );

  const showHideModal = useSpring({
    to: async (next: any) => {
      if (openModal) {
        await next({ display: 'flex' });
        await next({ opacity: 1 });
      } else {
        await next({ opacity: 0 });
        await next({ display: 'none' });
      }
    },
    from: { opacity: 0, display: 'none' },
    config: { duration: 200 },
  });

  return (
    <div>
      <ButtonContainer
        onClick={() => setOpenModal(!openModal)}
      >
        {button}
      </ButtonContainer>
      <Box style={showHideModal}>{children}</Box>
      <Background
        style={showHideModal}
        onClick={() => setOpenModal(!openModal)}
      />
    </div>
  );
};

export default Modal;
