export interface LoginResponse {
  user: {
    id: number;
    email: string;
  };
  token: string;
}
