import styled from '@emotion/styled/macro';

export const TextareaContainer = styled.div``;

export const TextareaStyled = styled.textarea`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  padding: 12px 14px;
  font-size: 17px;
  border-radius: 6px;
  border: none;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  max-height: 400px;
  min-height: 200px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColorSecondary};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;
