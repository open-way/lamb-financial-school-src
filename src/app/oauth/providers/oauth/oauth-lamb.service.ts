import { Injectable, Inject } from '@angular/core';
import { TOKEN_LAMB_OAUTH_URL, TOKEN_LAMB_CREDENTIALS_APP, CredentialsApp } from '../../utils';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class OauthLambService {

    constructor(@Inject(TOKEN_LAMB_OAUTH_URL) protected tokenLambOAuthUrl: string,
        @Inject(DOCUMENT) protected document: any,
        @Inject(TOKEN_LAMB_CREDENTIALS_APP) protected tokenLambCredentialsApp: CredentialsApp) { }

    public getAuthorizationCode() {
        this.redirectToLogin();
    }

    public getAccessToken() {

    }

    public redirectToLogin() {
        const response_type = 'code';
        const client_id = this.tokenLambCredentialsApp.client_id;
        const redirect_uri = encodeURIComponent(this.tokenLambCredentialsApp.redirect_uri);
        const scope = 'x'; // Opcional,
        const state = '123'; // Generar un token,
        const paramRequest =
            `response_type=${response_type}&client_id=${client_id}&scope=${scope}&state=${state}&redirect_uri=${redirect_uri}`;
        this.document.location.href = `${this.tokenLambOAuthUrl}authorize?${paramRequest}`;
    }
}
