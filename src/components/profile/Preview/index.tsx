import React, { FC } from 'react';
import { Container, Box, Grid, Title } from '../..';
import { PreviewProps } from './interface';
import { PreviewContainer, TitleContainer, SeeAll } from './styles';

const Preview: FC<PreviewProps> = ({ children, item }) => {
  return (
    <PreviewContainer>
      <Container>
        <Box>
          <TitleContainer>
            <Title>{item}</Title>
            <SeeAll>See All {item}</SeeAll>
          </TitleContainer>
          <Grid>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU'
              alt='pic'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU'
              alt='pic'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU'
              alt='pic'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU'
              alt='pic'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU'
              alt='pic'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU'
              alt='pic'
            />
          </Grid>
        </Box>
      </Container>
    </PreviewContainer>
  );
};

export default Preview;
