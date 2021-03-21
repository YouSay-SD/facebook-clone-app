// eslint-disable-next-line consistent-return
export const fileUpload = async (file: string) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dqd8tazyf/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'facebook-clone');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    }
    throw await resp.json();
  } catch (error) {
    console.log(error);
  }
};
