export interface AuthState {
  uid?: string;
  userName?: string;
  checking: boolean;
}

export interface PayloadProps {
  uid: string;
  displayName: string;
}

export type Action = {
  type: string;
  payload: PayloadProps;
};
