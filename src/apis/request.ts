/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/dot-notation */

import axios from "axios";

const token = localStorage.getItem("auth-token");
console.log("🚀 ~ file: request.ts:7 ~ token:", token)
if (token !== null) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

const request = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default request;
