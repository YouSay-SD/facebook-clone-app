export interface PostState {
  posts: PostProps[];
  pictures: PictureProps[];
  activePost: PostProps | null;
  loadingPost: boolean;
}

export interface PostProps {
  author: string;
  body?: string;
  id: string;
  date: number;
  picture?: string;
}

export interface PictureProps {
  author: string;
  id: string;
  date: number;
  picture: string;
}

export interface FormPostProps {
  body?: string;
  date?: number;
  picture?: string;
}

export interface AuthPayloadProps {
  posts: PostProps[];
  pictures: PictureProps[];
  idPost?: string;
}

export type Action = {
  type: string;
  payload: AuthPayloadProps;
};
