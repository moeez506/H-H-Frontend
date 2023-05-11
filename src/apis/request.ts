/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/dot-notation */

import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
});

function setAuthorizationHeader() {
  const token = localStorage.getItem("auth-token");
  if (token !== null) {
    request.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
}

// Set the Authorization header immediately if the token is available
setAuthorizationHeader();

// Listen for changes to the auth token and update the header accordingly
window.addEventListener("storage", (event) => {
  if (event.key === "auth-token") {
    setAuthorizationHeader();
  }
});

request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("auth-token");
    // console.log("🚀 ~ file: request.ts:43 ~ token:", token);
    if (token !== null) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // console.log("🚀 ~ file: request.ts:49 ~ config:", config);
    return config;
  },

  function (error) {
    console.log("🚀 ~ file: request.ts:50 ~ error:", error);
    // // Do something with request error
    // return Promise.reject(error);
  }
);

export default request;
