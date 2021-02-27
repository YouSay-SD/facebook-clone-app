export interface AuthState {
  uid?: string;
  userName?: string;
  checking: boolean;
}

export interface AuthPayloadProps {
  uid: string;
  displayName: string;
}

export type Action = {
  type: string;
  payload: AuthPayloadProps;
};
