import React, { FC } from 'react';
import { InputContainer, InputStyled } from './styles';
import { InputProps } from './interface';

const Input: FC<InputProps> = ({ width, innerRef, ...props }) => {
  return (
    <InputContainer width={width}>
      <InputStyled ref={innerRef} {...props} />
    </InputContainer>
  );
};

export default Input;
