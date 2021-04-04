import React from 'react';

export interface PictureProps {
  idPicture?: string;
  picture: string;
  fullSize?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface PictureContainerProps {
  fullSize?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
