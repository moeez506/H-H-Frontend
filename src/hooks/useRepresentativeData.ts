/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/promise-function-async */

import { useMutation, useQuery } from "react-query";
import request from "../apis/request";

const representativeData = async () => {
  return await request.get(`/group/one-representative`);
};

export const useRepresentiveData = () => {
  return useQuery("representative-data", representativeData);
};

const getIndividualMembers = async () => {
  return await request.get(`auth/invidual-members`);
};

export const useMemberData = () => {
  return useQuery("member-data", getIndividualMembers);
};

export const deleteIndividualMembers = async () => {
  return await request.delete(`group/delete-individual-member/642db746470e8d8cbc48be46`);
};

// export const useMemberDelete = () => {
//   return useMutation("delete-member", deleteIndividualMembers);
// };

const individualMemberDetail = async (id: string | undefined) => {
  return await request.get(`/auth/member-detail/${id}`);
};

export const useIndividualMemberDetail = (id: string | undefined) => {
  return useQuery(["member-detail", id], () => individualMemberDetail(id));
};
