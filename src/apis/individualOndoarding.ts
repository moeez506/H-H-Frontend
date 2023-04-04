/* eslint-disable prettier/prettier */
import request from "./request";

export const updateIndividualAdmin = async (values: any) => {
  try {
    const { data } = await request.patch("/auth/update-user", values);
    console.log("🚀individualOndoarding.ts:7 ~ updateIndividualAdmin:", data);

    return data;
  } catch (error) {
    console.error(error);
    // throw new Error("Login failed. Please try again.");
  }
};

export const createKin = async (values: any) => {
  try {
    const { data } = await request.post("/auth/create-kin", values);
    console.log("🚀 ~ file: individualOndoarding.ts:23 ~ createKin:", data);
    return data;
  } catch (error) {
    console.error(error);
    // throw new Error("Login failed. Please try again.");
  }
};
