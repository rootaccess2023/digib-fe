import { apiFetch } from "./client";
import type { LoginResponse, SignupResponse } from "../types/auth";

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  return apiFetch<LoginResponse>("/api/v1/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function signup(email: string, 
    password: string, 
    password_confirmation: string
  ): Promise<SignupResponse> {
  
  return apiFetch<SignupResponse> ("/api/v1/signup", {
    method: "POST", 
    body: JSON.stringify({email, password, password_confirmation}),
  });
}
