export interface IForm {
  email: string;
  password: string;
}
export interface ILogin {
  setShowPassword?: any;
  showPassword?: boolean;
  setUserData?: any;
  userData?: IForm;
  handleChange?: any;
  handleSubmit?: () => void;
  // handleChange?: React.ChangeEvent<HTMLInputElement>;
  // handleButtonClick: any;
  // handleMouseDownPassword?: (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => void;
  // handleClickShowPassword?: any;
}
export interface IInitialState {
  loading: boolean;
  responseData: any;
  error: string;
}
