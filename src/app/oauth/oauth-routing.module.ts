import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OauthComponent } from './oauth.component';
import { LoginPageComponent, RedirectComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: OauthComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent,
      },
      {
        path: 'redirect',
        component: RedirectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OauthRoutingModule { }
