export interface IUsersData {
  data?: any;
  page?: number;
  per_page?: number;
  total_pages?: number;
  totalrecord?: number;
}

export interface IInitialState {
  loading: boolean;
  userData: IUsersData;
  error: string;
}

export interface ICurrentUser {
  createdat?: string;
  email?: string;
  id?: number;
  location?: string;
  name?: string;
  profilepicture?: string;
}
export interface IInitialStateCurrentUser {
  loading: boolean;
  currentUser: ICurrentUser;
  error: string;
}

export interface IDeleteUserInitialState {
  loading: boolean;
  deleteUser?: any;
  error: any;
}

export interface IState {
  currentUser?: IInitialStateCurrentUser;
  deleteUser?: IDeleteUserInitialState;
  users?: IInitialState;
}

export interface ConfirmPopupProps {
  open?: any;
  handleConfirm: () => void;
  rowData?: ICurrentUser;
  handleCancel: () => void;
  deleteUserLoader?: boolean;
}

export interface ICurrentUserProps {
  userData?: ICurrentUser;
}
