import { useQuery } from "react-query";
import request from "../apis/request";
import jwt_decode, { JwtPayload } from "jwt-decode";

interface TokenPayload extends JwtPayload {
  id: string;
  iat: number;
  exp: number;
}

const dashboardMembers = async (id: string) => {
  const response = await request.get(`/group/invidual-members/${id}`);
  return response.data;
};

export const useDashboardMembers = () => {
  let id: string;
  const token = localStorage.getItem("auth-token");
  if (token) {
    const decodedToken = jwt_decode<TokenPayload>(token);
    id = decodedToken.id;
    console.log(id);
  } else {
    console.error("Token not found in local storage.");
  }
  return useQuery("Dashboard-Members", async () => {
    const response = await dashboardMembers(id);
    return response.data;
  });
};
