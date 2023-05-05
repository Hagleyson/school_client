import { urls } from "@/shared/constant/apiUrl";

import { ILoginResponse, ISession } from "./interface";
import { ISign } from "@/shared/Interfaces";
import { http } from "@/shared/lib";

const authServices = (): ISession => {
  async function login(data: ISign): Promise<ILoginResponse> {
    return http.post(urls.auth.login(), data);
  }

  async function logout(): Promise<void> {
    return http.post(urls.auth.logout());
  }

  async function refresh(): Promise<ILoginResponse> {
    return http.post(urls.auth.refresh());
  }

  return { login, logout, refresh };
};

export default authServices;
