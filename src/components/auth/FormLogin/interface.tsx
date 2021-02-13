import React from 'react';

export interface FormData {
  email: string;
  password: string;
}

export type FormE = React.FormEvent<HTMLFormElement>;
