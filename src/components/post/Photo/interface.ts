import React from 'react';

export interface PhotoProps {
  url: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
