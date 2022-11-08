export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

export interface ILocalStorageUserInfo {
  email: string | undefined;
  token: string | null;
}
