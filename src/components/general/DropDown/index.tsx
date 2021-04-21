import React, { FC } from 'react';
import { DropDownContainer, Item } from './styles';
import { DropDownProps } from './interface';
import { Box, Button } from '../..';

const DropDown: FC<DropDownProps> = () => {
  return (
    <DropDownContainer>
      <Box>
        <Item>
          <Button type='edit' circle />
        </Item>
      </Box>
    </DropDownContainer>
  );
};

export default DropDown;
