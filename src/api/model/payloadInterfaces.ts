export interface RegisterForm {
  username: string;
  password: string;
  confirm_password: string;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface EditWordBody {
  national: string;
  foreign: string;
}

export interface AddWordBody {
  national: string;
  foreign: string;
}