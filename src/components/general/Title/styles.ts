import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { TitleProps, SizesProps } from './interface';

const sizes: SizesProps = {
  small: '16px',
  medium: '20px',
  large: '26px',
};

export const TitleContainer = styled.h2<TitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ size }) => (size ? sizes[size] : sizes.medium)};
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
`;
