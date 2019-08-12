import { Injectable, Inject } from '@angular/core';
import { TOKEN_LAMB_OAUTH_STORE, OauthStore } from '../../utils';

@Injectable({ providedIn: 'root' })
export class LambOAuthStoreService {
  constructor(
    @Inject(TOKEN_LAMB_OAUTH_STORE) protected tokenLambOauthStore: OauthStore,
  ) {
  }

  public setAccessToken(accessToken: string) {
    localStorage.setItem(this.tokenLambOauthStore.accessToken, accessToken);
  }

  public getAccessToken() {
    return localStorage.getItem(this.tokenLambOauthStore.accessToken);
  }

  // public setUserData(userData: any) {
  //   localStorage.setItem(this.lambOauthStore.userData, JSON.stringify(userData));
  // }

  // public getUserData() {
  //   return JSON.parse(localStorage.getItem(this.lambOauthStore.userData));
  // }

  public clearAll() {
    localStorage.removeItem(this.tokenLambOauthStore.accessToken);
  }

}
