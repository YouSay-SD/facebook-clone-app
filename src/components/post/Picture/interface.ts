import React from 'react';

export interface PictureProps {
  picture: string;
  fullSize?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface PictureContainerProps {
  fullSize?: boolean;
}
