import React, { FC } from 'react';
import { InputContainer, InputStyled, InputSubmit, Label } from './styles';
import { InputProps } from './interface';
import { Button } from '../..';

const Input: FC<InputProps> = ({
  id,
  type,
  width,
  widthMobile,
  innerRef,
  children,
  onChange,
  ...props
}) => {
  return (
    <InputContainer width={width} widthMobile={widthMobile}>
      {type === 'email' || type === 'password' || type === 'text' ? (
        <>
          <InputStyled type={type} ref={innerRef} {...props} />
          {children}
        </>
      ) : null}

      {type === 'file' && (
        <>
          <Label htmlFor={id}>
            <Button width={100} type='file'>
              {children}
            </Button>
          </Label>
          <InputStyled
            id={id}
            type='file'
            ref={innerRef}
            onChange={onChange}
            {...props}
          />
        </>
      )}

      {type === 'submit' && (
        <>
          <InputSubmit type='submit' ref={innerRef} {...props} />
          {children}
        </>
      )}
    </InputContainer>
  );
};

export default Input;
