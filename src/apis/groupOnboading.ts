/* eslint-disable prettier/prettier */

import request from "./request";

export const createGroupApi = async (values: any) => {
  try {
    const { data } = await request.post("/group/create", values);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const updateRepresentative = async (values: any) => {
  try {
    const { data } = await request.patch(
      "/group/update-representative",
      values
    );
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const createRepresentative = async (values: any) => {
  try {
    const { data } = await request.post("/group/create-representative", values);
    console.log("🚀 ~ file: groupOnboading.ts:29 ~ createRepresentative ~ values:", values)
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const checkUserEmail = async (email: any) => {
  try {
    const { data } = await request.post("/auth/user-emails", {email});
    console.log("🚀 ~ file: groupOnboading.ts:38 ~ checkUserEmail ~ values:", email)
    return data.message;
  } catch (error: any) {
    console.error(error);
    return error.response.data.msg;
  }
}
