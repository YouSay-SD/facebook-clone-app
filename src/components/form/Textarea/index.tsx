import React, { FC } from 'react';
import { TextareaContainer, TextareaStyled } from './styles';
import { TextareaProps } from './interface';

const Textarea: FC<TextareaProps> = ({ onChange, innerRef, ...props }) => {
  return (
    <TextareaContainer>
      <TextareaStyled onChange={onChange} {...props} ref={innerRef} />
    </TextareaContainer>
  );
};

export default Textarea;
