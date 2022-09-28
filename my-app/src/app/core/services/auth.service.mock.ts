import {ILocalStorageUserInfo} from "@shared/";

interface IAuthService {
  login(): void,

  logout(): void,

  getUserInfo(): ILocalStorageUserInfo;
}

export class AuthServiceMock implements IAuthService {
  private tokenString: string = 'sssfjn28295wsfssfnfsf092425f';

  public login(): void {
  }

  public logout(): void {
  }

  public getUserInfo(): ILocalStorageUserInfo {
    return {'email': "email@gmail.com", 'token': this.tokenString}
  }
}
