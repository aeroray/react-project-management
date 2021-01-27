import { User } from "pages/ProjectList/types";

const LS_KEY = "__auth_token__";
const API_URL = process.env.REACT_APP_API_URL;

export const getToken = () => localStorage.getItem(LS_KEY);

const saveTokenToLS = ({ user }: { user: User }) => {
  localStorage.setItem(LS_KEY, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) =>
  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return saveTokenToLS(await res.json());
    } else {
      return Promise.reject();
    }
  });

export const register = (data: { username: string; password: string }) =>
  fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return saveTokenToLS(await res.json());
    } else {
      return Promise.reject();
    }
  });

export const logout = async () => localStorage.removeItem(LS_KEY);
