import { useContext } from "react";

import { AuthContext } from "context/auth.context";

export const useAuthCtx = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("必须在AuthProvider中使用！");
  return ctx;
};
