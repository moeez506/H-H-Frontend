import request from "./request";

export const Square = async () => {
  try {
    const result = await request.get("/payment/square/pay");

    console.log("🚀 ~ file: auth.ts:12 ~ login ~ result:", result);
    return result;
  } catch (error: any) {
    console.log("🚀 ~ file: auth.ts:24 ~ login ~ error:", error);
    return error.response;
  }
};
