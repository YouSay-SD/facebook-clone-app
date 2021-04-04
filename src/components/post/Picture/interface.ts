import React from 'react';

export interface PictureProps {
  id?: string;
  picture: string;
  fullSize?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  redirect?: boolean;
}

export interface PictureContainerProps {
  fullSize?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  redirect?: boolean;
}
