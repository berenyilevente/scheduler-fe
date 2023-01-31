export interface LoginArgs {
  email: string;
  password: string;
}

export interface RegisterArgs {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  _id: string;
  email: string;
}
