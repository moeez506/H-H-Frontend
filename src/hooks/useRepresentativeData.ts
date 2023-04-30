/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/promise-function-async */

import { useQuery } from "react-query";
import request from "../apis/request";

const representativeData = async () => {
  return await request.get(`/group/one-representative`);
};

export const useRepresentiveData = () => {
  return useQuery("representative-data", representativeData);
};

