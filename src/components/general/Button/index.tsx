import React, { FC } from 'react';
import { ButtonContainer, Text, Icon } from './styles';
import { ButtonProps } from './interfase';

const Button: FC<ButtonProps> = ({
  children,
  type,
  fontWeight,
  fontSize,
  width,
}) => {
  return (
    <ButtonContainer width={width}>
      {type && (
        <Icon
          src={`${process.env.REACT_APP_URL}/img/icons/${type}.svg`}
          alt={type}
        />
      )}
      <Text fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
