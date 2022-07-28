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
