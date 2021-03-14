import React, { FC } from 'react';
import { TextareaContainer, TextareaStyled } from './styles';
import { TextareaProps } from './interface';

const Textarea: FC<TextareaProps> = ({ ...props }) => {
  return (
    <TextareaContainer>
      <TextareaStyled {...props} />
    </TextareaContainer>
  );
};

export default Textarea;
