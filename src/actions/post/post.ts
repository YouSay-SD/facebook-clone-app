import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';
import { db, postsRef } from '../../firebase/firebaseConfig';
import { getPictures } from '../../helpers/getPictures';
import { getPosts } from '../../helpers/getPosts';
import { getAllPosts } from '../../helpers/getAllPosts';
import {
  FormPostProps,
  PostProps,
  PictureProps,
} from '../../reducers/postReducer/interface';

export const startNewPost = (newPost: FormPostProps) => {
  return async (dispatch: any, getState: any) => {
    const { userName } = getState().auth;
    const doc = await postsRef.add(newPost);
  };
};

// Set Posts
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

// Set All Posts
export const startSetAllPosts = (posts: PostProps[]) => ({
  type: types.getAllPosts,
  payload: posts,
});

export const setAllPosts = () => {
  return async (dispatch: any) => {
    const posts = await getAllPosts();
    dispatch(startSetAllPosts(posts));
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

// Start Loading Post
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

export const deletePost = (idPost: string) => {
  return async (dispatch: any, getState: any) => {
    const { userName } = getState().auth;
    await postsRef.doc(idPost).delete();

    await dispatch(startDeletePost(idPost));
  };
};

// Update Post
export const startUpdatePost = (idPost: string, body: string) => ({
  type: types.updatePost,
  payload: {
    id: idPost,
    body,
  },
});

export const UpdatePost = (idPost: string, body: string) => {
  return async (dispatch: any, getState: any) => {
    const { userName } = getState().auth;
    await db
      .collection(`posts`)
      .doc(userName)
      .collection('post')
      .doc(idPost)
      .update({
        body,
      });

    await dispatch(startUpdatePost(idPost, body));
  };
};
