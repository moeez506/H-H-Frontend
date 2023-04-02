/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/promise-function-async */

import { useQuery } from "react-query";
import request from "../apis/request";

const representativeData = () => {
  return request.get(`/group/one-representative/6408975cc8712e329abe02a8`);
};

export const useRepresentiveData = () => {
  return useQuery("representative-data", representativeData);
};
