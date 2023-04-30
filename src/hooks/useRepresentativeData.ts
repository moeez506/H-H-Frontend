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

const getIndividualMembers = async () => {
  return await request.get(`group/invidual-members/642804d35e141e0c3f82479d`);
};

export const useMemberData = () => {
  return useQuery("member-data", getIndividualMembers);
};
