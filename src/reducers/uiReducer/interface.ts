export interface UiState {
  loading: boolean;
  loadingCreatePost: boolean;
  loadingUpdatePost: boolean;
  loadingDeletePost: boolean;
  modalCreatePost: boolean;
  modalUpdatePost: boolean;
  modalDeletePost: boolean;
}

export type Action = {
  type: string;
  payload: string;
};
