export interface AuthState extends UserProps {
  checking?: boolean;
}

export interface UserProps {
  uid: string | null;
  userName: string | null;
  avatar: string;
  banner: string;
  darkTheme: boolean;
}

export interface AuthPayloadProps {
  uid: string;
  displayName: string;
  avatar: string;
}

export type Action = {
  type: string;
  payload: AuthPayloadProps;
};
