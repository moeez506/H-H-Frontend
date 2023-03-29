/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/promise-function-async */

import { useQuery } from "react-query";
import request from "../apis/request";

// 6408b251f070213942bae18d
const representativeData = (id: string) => {
  return request.get(`/group/one-representative/${id}`);
};

export const useRepresentiveData = (id: string) => {
  const { isLoading, isError, data } = useQuery("representative-data", () =>
    representativeData(id)
  );
  return { isLoading, isError, data };
};
