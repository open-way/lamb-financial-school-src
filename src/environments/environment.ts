// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {
  lambCredentialsApp, upeuCredentialsApp, API_LAMB_URL,
  API_UPEU_URL, LAMB_OAUTH_URL, UPEU_OAUTH_URL, SHELL_APP_URL,
} from './config-app';

export const environment = {
  production: false,

  shellAppUrl: SHELL_APP_URL,

  lambOAuthUrl: LAMB_OAUTH_URL,
  upeuOAuthUrl: UPEU_OAUTH_URL,

  lambClientCredentials: lambCredentialsApp,
  upeuClientCredentials: upeuCredentialsApp,

  apiLambUrl: API_LAMB_URL.vitmar,
  apiUpeuUrl: API_UPEU_URL,
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
