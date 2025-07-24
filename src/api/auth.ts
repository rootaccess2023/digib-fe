import { apiFetch } from "./client";
import type { LoginResponse, SignupResponse, LogoutResponse } from "../types/auth";

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  return apiFetch<LoginResponse>("/api/v1/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function signup(
  email: string,
  password: string,
  password_confirmation: string,
  first_name: string,
  last_name: string,
  date_of_birth: Date,
  place_of_birth: string,
  gender: string,
  civil_status: string,
  nationality: string,
  middle_name?: string,
  suffix?: string,
  phone?: string,
): Promise<SignupResponse> {
  return apiFetch<SignupResponse>("/api/v1/signup", {
    method: "POST",
    body: JSON.stringify({
      user: {
        email,
        password,
        password_confirmation,
        first_name,
        middle_name,
        last_name,
        suffix,
        date_of_birth,
        place_of_birth,
        gender,
        civil_status,
        nationality,
        phone,
      },
    }),
  });
}

export async function logout(token: string | undefined): Promise<LogoutResponse> {
  return apiFetch<LogoutResponse>("/api/v1/logout", {
    method: "DELETE",
    headers: {
      Authorization : `Bearer ${token}`
    }
  })
}