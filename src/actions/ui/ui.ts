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
