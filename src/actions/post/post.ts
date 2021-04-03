import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';
import { db } from '../../firebase/firebaseConfig';
import { getPictures } from '../../helpers/getPictures';
import { getPosts } from '../../helpers/getPosts';
import {
  FormPostProps,
  PostProps,
  PictureProps,
} from '../../reducers/postReducer/interface';

export const startNewPost = (newPost: FormPostProps) => {
  return async (dispatch: any, getState: any) => {
    const { userName } = getState().auth;

    const doc = await db.collection(`posts/${userName}/post`).add(newPost);
  };
};

export const startSetPosts = (posts: PostProps[]) => ({
  type: types.getPosts,
  payload: posts,
});

export const setPosts = (userName: string) => {
  return async (dispatch: any) => {
    const posts = await getPosts(userName);
    dispatch(startSetPosts(posts));
  };
};

export const startSetPictures = (pictures: PictureProps[]) => ({
  type: types.getPictures,
  payload: pictures,
});

export const setPictures = (userName: string) => {
  return async (dispatch: any) => {
    const pictures = await getPictures(userName);
    dispatch(startSetPictures(pictures));
  };
};

export const startUploading = (file: string) => {
  return async (dispatch: any, getState: any) => {
    const fileUrl = await fileUpload(file);
  };
};

export const startLoadingPost = () => ({
  type: types.startLoadingPost,
});

export const finishLoadingPost = () => ({
  type: types.finishLoadingPost,
});

// Active Post
export const startSetActivePost = (activePost: any) => ({
  type: types.setActivePost,
  payload: activePost,
});

export const setActivePost = ({ idPost }: any) => {
  return (dispatch: any, getState: any) => {
    const { posts } = getState().post;
    const activePost = posts.filter(({ id }: any) => id === idPost);
    dispatch(startSetActivePost(activePost));
  };
};

// Delete Post
export const startDeletePost = (idPost: string) => ({
  type: types.deletePost,
  payload: idPost,
});

export const DeletePost = (idPost: string) => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth;
    db.collection(`posts`).doc(uid).collection('post').doc(idPost).delete();

    dispatch(startDeletePost(idPost));
  };
};
