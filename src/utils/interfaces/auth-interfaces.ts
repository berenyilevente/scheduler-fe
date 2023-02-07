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
  user: UserArgs;
}

export interface UserArgs {
  _id: string;
  email: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}
