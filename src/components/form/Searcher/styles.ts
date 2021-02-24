import styled from '@emotion/styled/macro';
import { flexCenterVertical } from '../../../styles/mixins';
import { IconProps } from './interface';

export const SearchContainer = styled.div<IconProps>`
  ${flexCenterVertical}
  margin-left: 15px;
`;

export const Search = styled.input`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  padding: 5px 10px;
  font-size: 1rem;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColorSecondary};
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

export const ResultsContainer = styled.div`
  position: absolute;
  bottom: -42px;
  left: 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0 0 10px 10px;
  width: 260px;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.2),
    inset 0 0 0 0 rgba(255, 255, 255, 0.5);
`;

export const Result = styled.div`
  ${flexCenterVertical};

  & > div {
    margin-right: 15px;
  }
`;
