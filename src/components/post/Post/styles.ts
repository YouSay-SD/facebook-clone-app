import styled from '@emotion/styled/macro';

export const PostContainer = styled.div`
  & > div {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: initial;
    }
  }
`;

export const PostHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 20px;
`;

export const PostMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;
