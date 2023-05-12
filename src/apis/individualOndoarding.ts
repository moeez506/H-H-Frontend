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
};export const createIndividualMember = async (values: any) => {
  try {
    const { data } = await request.post("/auth/create-member", values);
    console.log("🚀 ~ file: individualOndoarding.ts:23 ~ createKin:", data);
    return data;
  } catch (error) {
    console.error(error);
    // throw new Error("Login failed. Please try again.");
  }
};

export const deleteMember = async (id: string) => {
  try {
    const { data } = await request.delete(`/auth/delete-individual-member/${id}`);
    console.log("🚀 ~ file: individualOndoarding.ts:23 ~ createKin:", data);
    return data;
  } catch (error) {
    console.error(error);
    // throw new Error("Login failed. Please try again.");
  }
};

export const deleteGroupMember = async (id: string) => {
  try {
    const { data } = await request.delete(`/group/delete-group-member/${id}`);
    console.log("🚀 ~ file: individualOndoarding.ts:51 ~ deleteGroupMember ~ data:", data)
    return data;
  } catch (error) {
    console.error(error);
    // throw new Error("Login failed. Please try again.");
  }
};