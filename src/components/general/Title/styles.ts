import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { TitleProps } from './interface';

// type sizesProps = {
//   small: string;
//   medium: string;
//   large: string;
// };

// interface sizesContainerProps {
//   size: keyof typeof sizesProps;
// }

// const sizes: sizesProps = {
//   small: '16px',
//   medium: '20px',
//   large: '26px',
// };

// const getFontSize = (props) => {
//   const size = sizes[props.size];
//   return !size ? sizes.small : sizes;
// };

export const TitleContainer = styled.h2<TitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  font-weight: ${({ fontWeight }) => fontWeight || 700};

  ${respondAbove.sm} {
    font-size: ${({ sizeDesk }) => sizeDesk || 16}px;
  }
`;
