import { Injectable, Inject } from '@angular/core';
import { TOKEN_UPEU_OAUTH_URL, TOKEN_UPEU_CREDENTIALS_APP, CredentialsApp } from '../../utils';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class OauthUpeuService {

    constructor(@Inject(TOKEN_UPEU_OAUTH_URL) protected tokenUpeuOAuthUrl: string,
        @Inject(DOCUMENT) protected document: any,
        @Inject(TOKEN_UPEU_CREDENTIALS_APP) protected tokenUpeuCredentialsApp: CredentialsApp) { }

    public getAuthorizationCode() {

    }

    public getImplicit() {
        this.redirectToLoginImplicit();
    }


    public getAccessToken() {

    }
    public redirectToFormLogin() {
        const paramRequest = this.generateRequest();
        const next = 'next=/oauth/authorize/';
        const encodeParamRequest = encodeURIComponent(`${paramRequest}`);
        this.document.location.href = `${this.tokenUpeuOAuthUrl}accounts/logout?${next}${encodeParamRequest}`;
    }

    private redirectToLoginImplicit() {
        const paramRequest = this.generateRequest();
        this.document.location.href = `${this.tokenUpeuOAuthUrl}oauth/authorize${paramRequest}`;
    }

    private generateRequest() {

        const response_type = 'token';
        const client_id = this.tokenUpeuCredentialsApp.client_id;
        const redirect_uri = encodeURIComponent(this.tokenUpeuCredentialsApp.redirect_uri);
        const scope = 'read'; // Opcional,
        const state = '123'; // Generar un token,
        const paramRequest =
            `?response_type=${response_type}&client_id=${client_id}&scope=${scope}&state=${state}&redirect_uri=${redirect_uri}`;
        return paramRequest;
    }
}
