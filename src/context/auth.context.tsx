import { createContext, ReactNode, useState } from "react";

import * as auth from "helpers/auth";

import { User } from "pages/ProjectList/types";

interface AuthFormData {
  username: string;
  password: string;
}

interface AuthContextTypes {
  user: User | null;
  login: (data: AuthFormData) => Promise<void>;
  register: (data: AuthFormData) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextTypes | undefined>(
  undefined
);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (data: AuthFormData) => auth.login(data).then(setUser);
  const register = (data: AuthFormData) => auth.register(data).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    />
  );
};
