import { ChangeEvent, useState } from 'react';

export const useFormCustom = <T extends Object>(initState: T) => {
  const [formValues, setFormValues] = useState(initState);

  const reset = () => {
    setFormValues(initState);
  };

  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return { formValues, reset, handleInputChange };
};
