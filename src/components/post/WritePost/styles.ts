import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const WritePostContainer = styled.div`
  margin-bottom: 30px;
`;

export const WritePostForm = styled.form`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;

  & > div {
    &:last-child {
      grid-column: span 2;
    }
  }
`;

export const WritePostContent = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};

  h2 {
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(${({ theme }) => theme.colorsRGB.black}, 0.1);
  }

  textarea {
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  input {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 30px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const PhotoPreview = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 170px;
  border-radius: 10px;
  margin-bottom: 20px;

  ${respondAbove.sm} {
    max-height: 550px;
  }
`;

export const PhotoPreviewContainer = styled.div`
  position: relative;
`;

export const RemovePhotoPreview = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  right: 10px;
  top: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:after,
  &:before {
    content: '/';
    color: ${({ theme }) => theme.colors.fontColorSecondary};
    transform: rotate(25deg) translateY(-1.5px);
    display: inline-block;
    position: absolute;
    font-size: 20px;
    font-weight: bold;
  }

  &:before {
    transform: rotate(-70deg) translateY(-2px);
  }
`;
