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
  return await request.get(`group/invidual-members/642804d35e141e0c3f82479d`);
};

export const useMemberData = () => {
  return useQuery("member-data", getIndividualMembers);
};

const deleteIndividualMembers = async () => {
  return await request.delete(`group/delete-individual-member/642db746470e8d8cbc48be46`);
};

export const useMemberDelete = () => {
  return useMutation("delete-member", deleteIndividualMembers);
};
