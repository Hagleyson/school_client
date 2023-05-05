import React, { createContext, useContext, useEffect, useState } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";

import { ISign, IUserResponse } from "@/shared/Interfaces";

import { toast } from "react-toastify";
import { createSession } from "@/shared/helpers";
import { authServices } from "@/shared/services";
import { IAuthContext } from "./interface";

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);

  const { login } = authServices();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { USER: user } = parseCookies();
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  async function signIn({ email, password }: ISign) {
    try {
      const response = await login({
        email,
        password,
      });
      const { data } = response;

      if (response.status === 200) {
        createSession(data.access_token, data.refresh_token, {
          name: data.name,
          email: data.email,
        });
        setUser({
          name: data.name,
          email: data.email,
        });

        Router.push("/");
        return;
      }
    } catch ({ error }: any) {
      toast.error("translateErrosLogin(error)");
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useUser = (): IAuthContext => {
  return useContext(AuthContext);
};
