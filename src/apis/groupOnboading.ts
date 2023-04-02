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
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
