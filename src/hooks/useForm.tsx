import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [formValues, setFormValues] = useState(initState);

  const reset = () => {
    setFormValues(initState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return { formValues, reset, handleInputChange };
};
