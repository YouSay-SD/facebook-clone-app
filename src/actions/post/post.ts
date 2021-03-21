import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';

export const startUploading = (file: string) => {
  return async (dispatch: any, getState: any) => {
    const fileUrl = await fileUpload(file);
  };
};
