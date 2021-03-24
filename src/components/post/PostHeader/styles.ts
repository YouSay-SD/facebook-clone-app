import styled from '@emotion/styled/macro';

export const PostHeaderContainer = styled.div`
  display: flex;
  padding: 5px 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 8px;
`;

export const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  font-size: 0.9rem;
  width: 100%;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.fontColorSecondary};
  font-size: 0.75rem;
  width: 100%;
`;
