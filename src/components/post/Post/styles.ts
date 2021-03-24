import styled from '@emotion/styled/macro';

export const PostContainer = styled.div`
  & > div {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: initial;
    }
  }
`;
