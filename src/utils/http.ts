import qs from "qs";

import { logout } from "helpers/auth";

const API_URL = process.env.REACT_APP_API_URL;

export interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...rest }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...rest,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return fetch(`${API_URL}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录！" });
    }
    const data = await res.json();
    return res.ok ? data : Promise.reject(data);
  });
};
