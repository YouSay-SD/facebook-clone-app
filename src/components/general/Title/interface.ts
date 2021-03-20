export interface TitleProps {
  size?: string;
  sizes?: SizesProps;
  sizeDesk?: number;
  fontWeight?: number;
}

export interface SizesProps {
  [index: string]: string;
  small: string;
  medium: string;
  large: string;
}
