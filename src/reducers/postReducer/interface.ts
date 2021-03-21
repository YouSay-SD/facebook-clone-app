export interface PostState {
  posts: object;
}

export interface PostProps {
  body: string;
  id: string;
  date: number;
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
