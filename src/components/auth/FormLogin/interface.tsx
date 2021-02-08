import React from 'react';

export interface FormData {
  email: string;
  password: string;
}

export type FormElement = React.FormEvent<HTMLFormElement>;
