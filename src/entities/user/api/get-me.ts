import { api } from "@shared/api/client";

enum UserRole {
  USER,
  EDITOR,
  ADMIN,
}

export interface GetMeResponse {
  sub: string;
  email: string;
  username: string;
  role: UserRole;
}

export const getMe = async (): Promise<GetMeResponse> => {
  const { data } = await api.get<GetMeResponse>("/users/me");

  return data;
};
