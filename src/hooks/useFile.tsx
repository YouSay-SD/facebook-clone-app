import { ChangeEvent, useState } from 'react';

export const useFile = <T extends Object>(initState: T) => {
  const [imagePreview, setImagePreview] = useState<any>(initState);

  const [imageToUpload, setImageToUpload] = useState<any>(initState);

  const resetFile = () => {
    setImagePreview(null);
    setImageToUpload(null);
  };

  const handleFileChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value) {
      const reader = new FileReader();

      // Set Images Preview
      reader.onload = async () => {
        if (reader.readyState === 2) {
          setImagePreview({
            ...imagePreview,
            [target.name]: reader.result,
          });
        }
      };

      // Set Image To Upload
      if (target.files) {
        reader.readAsDataURL(target.files[0]);
        const fileImage = target.files[0];
        setImageToUpload({
          ...imageToUpload,
          [target.name]: fileImage,
        });
      }
    }
  };

  return { imagePreview, imageToUpload, handleFileChange, resetFile };
};
