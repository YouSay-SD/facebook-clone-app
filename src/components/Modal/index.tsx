import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useSpring } from 'react-spring';
import { RootStore } from '../../store/store';
import {
  uiOpenModal,
  uiCloseModal,
} from '../../actions/ui';
import {
  Box,
  Background,
  ButtonContainer,
} from './styles';

const Modal = ({ children, button }: any) => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector(
    (state: RootStore) => state.ui
  );

  const showHideModal = useSpring({
    to: async (next: any) => {
      if (modalOpen) {
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
        onClick={() => dispatch(uiOpenModal())}
      >
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
