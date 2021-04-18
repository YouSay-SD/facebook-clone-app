export interface PostState {
  posts: PostProps[];
  pictures: PictureProps[];
  activePost: PostProps | null;
  loadingPost: boolean;
}

export interface PostProps {
  id: string;
  date: number;
  author: string;
  body: string | null;
  picture: string | null;
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
  payload: any;
};
