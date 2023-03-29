/* eslint-disable prettier/prettier */
import request from "./request";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (values: LoginData) => {
  try {
    const { data } = await request.post("/auth/login", values);
    localStorage.setItem("authToken", data.token);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Login failed. Please try again.");
  }
};
export const registerUser = async (values: any) => {
  try {
    const { data } = await request.post("/auth/register", values);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Registration failed. Please try again.");
  }
};
