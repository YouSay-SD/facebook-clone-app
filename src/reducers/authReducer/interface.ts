export interface AuthState {
  uid?: string;
  name?: string;
}

export interface PayloadProps {
  uid: string;
  displayName: string;
}

export type Action = {
  type: string;
  payload: PayloadProps;
};
