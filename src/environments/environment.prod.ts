import {
  lambCredentialsApp, upeuCredentialsApp, LAMB_OAUTH_URL, UPEU_OAUTH_URL,
  API_LAMB_URL, API_UPEU_URL, SHELL_APP_URL,
} from './config-app.prod';

export const environment = {
  production: true,

  // clientCredentials: credentialsApp,
  // oAuthUrl: OAUTH_URL,
  // apiUrl: API_URL,
  shellAppUrl: SHELL_APP_URL,

  lambClientCredentials: lambCredentialsApp,
  upeuClientCredentials: upeuCredentialsApp,
  lambOAuthUrl: LAMB_OAUTH_URL,
  upeuOAuthUrl: UPEU_OAUTH_URL,
  apiLambUrl: API_LAMB_URL,
  apiUpeuUrl: API_UPEU_URL,
};
