export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

export interface ILocalStorageUserInfo {
  email: string | null;
  token: string | null;
}
