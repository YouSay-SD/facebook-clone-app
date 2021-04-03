export interface UiState {
  loading: boolean;
  isMyProfile: boolean;
}

export type Action = {
  type: string;
  payload: string;
};
