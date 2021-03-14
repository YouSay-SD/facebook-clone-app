import React, { FC } from 'react';
import { InputContainer, InputStyled, Label } from './styles';
import { InputProps } from './interface';
import { Button } from '../..';

const Input: FC<InputProps> = ({
  type,
  width,
  widthMobile,
  innerRef,
  children,
  ...props
}) => {
  return (
    <InputContainer width={width} widthMobile={widthMobile}>
      {type === 'email' || type === 'password' || type === 'text' ? (
        <>
          <InputStyled type={type} ref={innerRef} {...props} />
          {children}
        </>
      ) : (
        <>
          <Label htmlFor='file'>
            <Button width={100} type='file'>
              Photo
            </Button>
          </Label>
          <InputStyled id='file' type={type} ref={innerRef} {...props} />
          {children}
        </>
      )}
    </InputContainer>
  );
};

export default Input;
