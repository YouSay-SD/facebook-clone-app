export interface AuthState {
  uid?: string;
  userName?: string;
  avatar?: string;
  checking: boolean;
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
