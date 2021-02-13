import { ChangeEvent, useState } from 'react';
import validator from 'validator';

export const useForm = <T extends Object>(initState: T) => {
  const [formValues, setFormValues] = useState(initState);

  const reset = () => {
    setFormValues(initState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    console.log(target.placeholder);
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // if (validate) {
    //   console.log(target);
    // }
  };

  return { formValues, reset, handleInputChange };
};
