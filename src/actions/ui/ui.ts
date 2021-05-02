import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { types } from '../../types/types';
import { RootStore } from '../../store/store';

export const startLoading = () => ({
  type: types.startLoading,
});

export const finishLoading = () => ({
  type: types.finishLoading,
});

// Loading Create Post
export const loadCreatePost = (state: boolean = false) => ({
  type: types.loadingCreatePost,
  payload: state,
});

// Loading Update Post
export const loadUpdatePost = (state: boolean = false) => ({
  type: types.loadingUpdatePost,
  payload: state,
});

// Loading Delete Post
export const loadDeletePost = (state: boolean = false) => ({
  type: types.loadingDeletePost,
  payload: state,
});

// Modal Create Post
export const openModalCreatePost = (state: boolean = false) => ({
  type: types.modalCreatePost,
  payload: state,
});

// Modal Update Post
export const openModalUpdatePost = (state: boolean = false) => ({
  type: types.modalUpdatePost,
  payload: state,
});

// Modal Delete Post
export const openModalDeletePost = (state: boolean = false) => ({
  type: types.modalDeletePost,
  payload: state,
});
