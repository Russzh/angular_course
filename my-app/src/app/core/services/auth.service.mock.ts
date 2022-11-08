import {ILocalStorageUserInfo} from "@shared/";
import {BehaviorSubject} from "rxjs";
import {IAuthService} from "@core/services/auth.service";

export class AuthServiceMock implements IAuthService {
  public tokenString: string = 'sssfjn28295wsfssfnfsf092425f';
  public isAuthenticated$$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  public login(): void {
  }

  public logout(): void {
  }

  public getUserInfo(): ILocalStorageUserInfo {
    return {'email': "email@gmail.com", 'token': this.tokenString}
  }
}
