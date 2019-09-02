export const lambCredentialsApp = {
    client_id: '293', /** Este es eñ ID del módulo */
    client_secret: '1a', /** Esto es vulnerable */
    redirect_uri: 'http://localhost:4100/oauth/redirect',
};

export const LAMB_OAUTH_URL = 'http://localhost:4210/#/oauth/';
export const SHELL_APP_URL = 'http://localhost:4200/';

export const API_LAMB_URL = {
    vitmar: 'http://app08.vitmar.lamb-dev.upeu/lamb-financial-school-api/public/api/',
};

export const API_UPEU_URL = 'https://oauthdj.upeu.edu.pe/api/';
/*********************** OAUTH2 URL **********************/
export const UPEU_OAUTH_URL = 'https://oauthdj.upeu.edu.pe/';
export const upeuCredentialsApp = {
    client_id: '5Tv4JZDW7aMGtw8drZ68ivOD5fgb3n81UhK3p4eX',
    // tslint:disable-next-line:max-line-length
    client_secret: 'U6VzW2r5ZLnQMOagtt3f3XAkKg16sVPfbZiDjSZRVIlm3OXdmEgqpkSVsr0XU1JEmXP1pxvYz6bP8HahA7Xx5gO3LC1edinLEJ5gOUxr3LChAMMBbIDd0zbiqTBDFQis', /** Esto es vulnerable */
    redirect_uri: 'http://localhost:4220/oauth/redirect',
};
