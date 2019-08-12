import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { AuthenticationGuardService } from './providers/guards';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [
      AuthenticationGuardService,
    ],
    loadChildren: 'app/modules/modules.module#ModulesModule',
  },
  {
  path: 'oauth',
  loadChildren: 'app/oauth/oauth.module#OauthModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
