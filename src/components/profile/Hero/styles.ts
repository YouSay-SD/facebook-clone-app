import styled from '@emotion/styled/macro';

interface ImageProps {
  url: string;
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 300px;
  background-image: url(${({ url }) => url || ''});
  background-position: center;
  background-size: cover;
`;
