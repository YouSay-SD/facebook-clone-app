export interface AuthState extends UserProps {
  checking?: boolean;
}

export interface UserProps {
  uid: string | null;
  userName: string | null;
  avatar?: string;
  banner?: string;
  darkTheme: boolean;
  bio: string;
}

export interface AuthPayloadProps {
  uid: string;
  avatar: string;
  banner: string;
  bio: string;
  userName: string;
}

export type Action = {
  type: string;
  payload: AuthPayloadProps;
};
