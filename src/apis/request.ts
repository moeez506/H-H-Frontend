/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/dot-notation */

import axios from "axios";

const token = localStorage.getItem("authToken");
if (token !== null) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

const request = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default request;
