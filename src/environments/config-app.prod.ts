export const lambCredentialsApp = {
    client_id: '6',
    client_secret: '1a', /** Esto es vulnerable */
    redirect_uri: 'http://mi-lamb.upeu.edu.pe/setup/oauth/redirect',
};

export const LAMB_OAUTH_URL = 'http://mi-auth.lamb.upeu.edu.pe/#/oauth/';
export const SHELL_APP_URL = 'https://lamb.upeu.edu.pe/';

export const API_LAMB_URL = 'https://api-lamb.upeu.edu.pe/';
export const API_UPEU_URL = 'https://oauthdj.upeu.edu.pe/api/';


export const UPEU_OAUTH_URL = 'https://oauthdj.upeu.edu.pe/';
export const upeuCredentialsApp = {
    client_id: '5Tv4JZDW7aMGtw8drZ68ivOD5fgb3n81UhK3p4eX',
    // tslint:disable-next-line:max-line-length
    client_secret: 'U6VzW2r5ZLnQMOagtt3f3XAkKg16sVPfbZiDjSZRVIlm3OXdmEgqpkSVsr0XU1JEmXP1pxvYz6bP8HahA7Xx5gO3LC1edinLEJ5gOUxr3LChAMMBbIDd0zbiqTBDFQis', /** Esto es vulnerable */
    redirect_uri: 'https://lamb.upeu.edu.pe/oauth/redirect',
};
