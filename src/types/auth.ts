export interface LoginResponse {
  user: {
    id: number;
    email: string;
  };
  token: string;
}

export interface SignupResponse {
  message: string,
  user: {
    id: number;
    email: string;
  },
  token: string,
}
