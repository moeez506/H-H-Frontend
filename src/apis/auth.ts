/* eslint-disable prettier/prettier */
import request from "./request";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (values: LoginData) => {
  try {
    await request.post("/auth/login", values)
     .then(res => {return res.data})
     .catch(err => {return err.response.data})
    // localStorage.setItem("authToken", data.token);
    
    // return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response.data.message || "Login failed. Please try again.");
  }
};
export const registerUser = async (values: any) => {
  try {
    const response = await request.post("/auth/register", values);
    console.log("🚀 ~ file: auth.ts:25 ~ registerUser ~ data:", response)

    return response.data;
    // await request.post("/auth/register", values)
    //  .then(res => console.log(res.data.message))
    //  .catch(err => console.log(err.response))
  } catch (error: any) {
    // if (error.response) {
    //   console.log(error.response.data, "working");
    //   return error.response.data;
    //   // handle server error response
    // } else {
    //   console.error(error);
    //   // handle other types of errors
    // }
    throw new Error(error.response.data || "Registration failed. Please try again.");
  }
};
