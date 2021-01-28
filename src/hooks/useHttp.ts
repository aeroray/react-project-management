import { http } from "utils/http";
import { useAuthCtx } from "./useAuthCtx";

export const useHttp = () => {
  const { user } = useAuthCtx();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
