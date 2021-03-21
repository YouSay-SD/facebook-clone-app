export interface PostState {
  posts: PostProps[];
  loadingPost: boolean;
}

export interface PostProps {
  body?: string;
  id: string;
  date: number;
  picture?: string;
}

export interface FormPostProps {
  body?: string;
  date?: number;
  picture?: string;
}

export interface AuthPayloadProps {
  posts: PostProps[];
}

export type Action = {
  type: string;
  payload: AuthPayloadProps;
};
