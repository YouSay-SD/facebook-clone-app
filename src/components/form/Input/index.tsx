import React, { FC } from 'react';
import { InputContainer, InputStyled } from './styles';
import { InputProps } from './interface';

const Input: FC<InputProps> = ({ width, innerRef, children, ...props }) => {
  return (
    <InputContainer width={width}>
      <InputStyled ref={innerRef} {...props} />
      {children}
    </InputContainer>
  );
};

export default Input;
