import React, { FC } from 'react';
import { TextareaContainer, TextareaStyled } from './styles';
import { TextareaProps } from './interface';

const Textarea: FC<TextareaProps> = ({ onChange, ...props }) => {
  return (
    <TextareaContainer>
      <TextareaStyled onChange={onChange} {...props} />
    </TextareaContainer>
  );
};

export default Textarea;
