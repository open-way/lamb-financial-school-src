import { Injectable, Inject } from '@angular/core';
import { TOKEN_UPEU_OAUTH_STORE, OauthStore } from '../../utils';

@Injectable({ providedIn: 'root' })
export class UpeuOAuthStoreService {
  constructor(
    @Inject(TOKEN_UPEU_OAUTH_STORE) protected tokenUpeuOauthStore: OauthStore,
  ) {
  }

  public setAccessToken(accessToken: string) {
    localStorage.setItem(this.tokenUpeuOauthStore.accessToken, accessToken);
  }

  public getAccessToken() {
    return localStorage.getItem(this.tokenUpeuOauthStore.accessToken);
  }

  public setUsername(username: string) {
    localStorage.setItem(this.tokenUpeuOauthStore.username, username);
  }

  public getUsername() {
    return localStorage.getItem(this.tokenUpeuOauthStore.username);
  }

  public clearAll() {
    localStorage.removeItem(this.tokenUpeuOauthStore.accessToken);
  }

}
