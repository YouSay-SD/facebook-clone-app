import React, { FC } from 'react';
import { ButtonStyled, Text, Icon } from './styles';

export interface ButtonProps {
  type?: string;
  fontWeight?: number;
  fontSize?: number;
  width?: number;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  fontWeight,
  fontSize,
  width,
}) => {
  return (
    <ButtonStyled width={width}>
      {type && (
        <Icon
          src={`${process.env.REACT_APP_URL}/img/icons/${type}.svg`}
          alt={type}
        />
      )}
      <Text fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </Text>
    </ButtonStyled>
  );
};

export default Button;
