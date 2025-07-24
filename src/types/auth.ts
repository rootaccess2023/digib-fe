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

export interface LogoutResponse {
  message: string,
}

export interface FormData {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  date_of_birth: Date;
  place_of_birth: string;
  gender: string;
  civil_status: string;
  phone: string;
  nationality: string;
}
