import React from 'react';

export interface IFields {
  name: string;
  email: string;
  password: string;
}

export type FormElement = React.FormEvent<HTMLFormElement>;
