import React, { FC } from 'react';
import { ButtonStyled, Icon } from './styles';

interface ButtonProps {
  type?: string;
}

const Button: FC<ButtonProps> = ({ children, type }) => {
  return (
    <ButtonStyled>
      {type && (
        <Icon
          src={`${process.env.REACT_APP_URL}/img/icons/${type}.svg`}
          alt={type}
        />
      )}
      <p>{children}</p>
    </ButtonStyled>
  );
};

export default Button;
