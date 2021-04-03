import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { types } from '../../types/types';
import { RootStore } from '../../store/store';

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});

// Is My Profile
export const startSetIsMyProfile = (isMyProfile: boolean) => ({
  type: types.isMyProfile,
});

export const setIsMyProfile = (userName: string, currentUser: string) => {
  return (dispatch: any) => {
    const isMyProfile: boolean = userName === currentUser;

    console.log(isMyProfile);
    console.log(userName, currentUser);

    dispatch(startSetIsMyProfile(isMyProfile));
  };
};
