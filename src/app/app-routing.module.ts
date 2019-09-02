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
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
  },
  {
    path: 'oauth',
    loadChildren: () => import('./oauth/oauth.module').then(m => m.OauthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
