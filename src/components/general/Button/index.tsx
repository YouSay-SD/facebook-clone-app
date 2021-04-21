import React, { FC } from 'react';
import { ButtonContainer, Text, Icon } from './styles';
import { ButtonProps } from './interfase';

const Button: FC<ButtonProps> = ({
  children,
  type,
  fontWeight,
  fontSize,
  width,
  onClick,
  circle,
}) => {
  return (
    <ButtonContainer width={width} onClick={onClick} circle={circle}>
      {type && (
        <Icon
          src={`${process.env.REACT_APP_URL}/img/icons/${type}.svg`}
          alt={type}
        />
      )}
      {children && (
        <Text fontWeight={fontWeight} fontSize={fontSize} type={type}>
          {children}
        </Text>
      )}
    </ButtonContainer>
  );
};

export default Button;
