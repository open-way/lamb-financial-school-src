import { InjectionToken } from '@angular/core';

export class OauthStore {
    // userData: string;
    username: string;
    accessToken: string;
    authorizationCode: string;
}

export class CredentialsApp {
    // tslint:disable-next-line:variable-name
    client_id: string;
    // tslint:disable-next-line:variable-name
    client_secret: string;
    // tslint:disable-next-line:variable-name
    redirect_uri: string;
}

export const TOKEN_LAMB_OAUTH_URL = new InjectionToken<string>('Lamb OAuth Url');
export const TOKEN_LAMB_OAUTH_STORE = new InjectionToken<OauthStore>('Lamb Oauth Store');
export const TOKEN_LAMB_CREDENTIALS_APP = new InjectionToken<CredentialsApp>('Lamb Credentials App');

export const TOKEN_UPEU_OAUTH_URL = new InjectionToken<string>('Upeu OAuth Url');
export const TOKEN_UPEU_OAUTH_STORE = new InjectionToken<OauthStore>('Upeu Oauth Store');
export const TOKEN_UPEU_CREDENTIALS_APP = new InjectionToken<CredentialsApp>('Upeu Credentials App');

export const TOKEN_LAMB_SHELL_APP_URL = new InjectionToken<CredentialsApp>('Lamb Shell App Url');
