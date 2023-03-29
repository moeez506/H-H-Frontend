/* eslint-disable prettier/prettier */
import request from "./request";
const config = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDg5NzVjYzg3MTJlMzI5YWJlMDJhOCIsImlhdCI6MTY3OTA0NjcwNCwiZXhwIjoxNjgwMzQyNzA0fQ.VxNcRJ0pRdQbvp7pcYqfbDvXDH4hIirmlTgizv3PEnM",
  },
};

export const individualOndoarding = async (values: any) => {
  try {
    const { data } = await request.patch(
      "/auth/update/6408975cc8712e329abe02a8", //TODO get id from logged in user
      values,
      config
    );
    console.log(
      "🚀 ~ file: individualOndoarding.ts:16 ~ individualOndoarding ~ data:",
      data
    );
    // const { data } = await request.post("/auth/create-member", values, config);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Login failed. Please try again.");
  }
};
