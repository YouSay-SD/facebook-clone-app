import React, { FC } from 'react';
import { InputContainer, InputStyled } from './styles';
import { InputProps } from './interface';

const Input: FC<InputProps> = ({
  width,
  widthMobile,
  innerRef,
  children,
  ...props
}) => {
  return (
    <InputContainer width={width} widthMobile={widthMobile}>
      <InputStyled ref={innerRef} {...props} />
      {children}
    </InputContainer>
  );
};

export default Input;
