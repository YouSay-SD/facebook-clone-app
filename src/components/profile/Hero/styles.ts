import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

interface ImageProps {
  url: string;
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 250px;
  border-radius: 0 0 10px 10px;
  background-image: url(${({ url }) => url || ''});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${respondAbove.sm} {
    height: 350px;
  }
`;

export const HeroContainer = styled.div`
  padding-bottom: 25px;
  position: relative;
  overflow: hidden;
  margin-bottom: 25px;
`;

export const BlurImage = styled.div<ImageProps>`
  background-image: url(${({ url }) => url || ''});
  background-size: cover;
  background-position: center;
  filter: blur(20px);
  transform: scale(1.2);
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -2;

  &:after {
    content: '';
    background: linear-gradient(
      0deg,
      rgba(${({ theme }) => theme.colorsRGB.secondary}) 44%,
      rgba(${({ theme }) => theme.colorsRGB.secondary}, 0) 70%
    );
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const Avatar = styled.div<ImageProps>`
  width: 180px;
  height: 180px;
  background-image: url(${({ url }) => url || ''});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: -20px;
`;

export const UserName = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  margin-bottom: 9px;
  font-weight: 800;
`;

export const TextContainer = styled.div`
  padding-top: 30px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  p {
    opacity: 0.7;
  }
`;
