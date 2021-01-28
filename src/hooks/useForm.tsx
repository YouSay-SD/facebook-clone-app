import React, { useState } from 'react';
import { IFields } from '../components/FormLogin/interface';

export const useForm = (
  initialState: IFields
) => {
  const [
    formValues,
    setValues,
  ] = useState<IFields>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: any) => {
    setValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return { formValues, reset, handleInputChange };
};
