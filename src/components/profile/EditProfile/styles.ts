import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const EditProfileContainer = styled.div`
  margin-top: 30px;
`;

export const TitleContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const RowStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    align-self: flex-start;
    width: 100%;
  }
`;

export const BannerStyled = styled.img`
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  height: 120px;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  background-position: center;

  ${respondAbove.xs} {
    height: 250px;
  }
`;

export const FormStyled = styled.form``;
