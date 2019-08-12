import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OauthRoutingModule } from './oauth-routing.module';
import { OauthComponent } from './oauth.component';
import { LoginPageComponent, RedirectComponent } from './components';

const COMPONENTS: any[] = [
  LoginPageComponent,
  RedirectComponent,
  OauthComponent,
];

@NgModule({
  imports: [
    CommonModule,
    OauthRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    // { provide: LAMB_CREDENTIALS_APP, useValue: env.clientCredentials },
  ],
})
export class OauthModule { }
