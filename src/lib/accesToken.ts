import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getRefreshToken = (name: string) => {
  return cookies.get(name);
};

export const getAccessToken = () => {
  const authToken = localStorage.getItem("authToken") || "";
  return authToken;
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem("authToken", accessToken);
};

export const logout = () => {
  localStorage.removeItem("authToken");
  cookies.remove("refreshToken");
};
