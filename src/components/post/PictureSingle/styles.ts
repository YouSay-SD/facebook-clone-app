import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const PictureSingleContainer = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
`;

export const ViewerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

export const PostContent = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: sticky;
  bottom: 0;
  left: 0;
`;

export const PostWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 20px;
`;
