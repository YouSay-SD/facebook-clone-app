import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { flexCenterVertical } from '../../../styles/mixins';
import { IconProps, ResultsContainerProps } from './interface';

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

export const ResultsContainer = styled.div<ResultsContainerProps>`
  display: ${({ displayResults }) => (displayResults ? 'block' : 'none')};
  position: absolute;
  top: 56px;
  left: 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0 0 10px 10px;
  width: 100%;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.2),
    inset 0 0 0 0 rgba(255, 255, 255, 0.5);

  ${respondAbove.sm} {
    width: 400px;
  }

  a {
    text-decoration: none;
  }
`;

export const Result = styled.div`
  ${flexCenterVertical};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(68, 73, 80, 0.15);
  }

  & > div {
    margin-right: 15px;
  }
`;
