export interface PostState {
  posts: PostProps[];
  pictures: PictureProps[];
  loadingPost: boolean;
}

export interface PostProps {
  body?: string;
  id: string;
  date: number;
  picture?: string;
}

export interface PictureProps {
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
}

export type Action = {
  type: string;
  payload: AuthPayloadProps;
};
