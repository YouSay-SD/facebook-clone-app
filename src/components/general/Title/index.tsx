import React, { FC } from 'react';
import { TitleContainer } from './styles';
import { TitleProps } from './interface';

const Title: FC<TitleProps> = ({ children, size, fontWeight }) => {
  return (
    <TitleContainer size={size} fontWeight={fontWeight}>
      {children}
    </TitleContainer>
  );
};

export default Title;
