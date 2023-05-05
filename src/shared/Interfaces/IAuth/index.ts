export interface IUserResponse {
  name: string;
  email: string;
}

export interface ILoggedUser {
  access_token: string;
  refresh_token: string;
  name: string;
  email: string;
}
export interface ISign {
  email: string;
  password: string;
}
