import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules.component';

/*const titles = require('./modules-titles.json');*/

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'operations',
        loadChildren: () => import('./operations/operations.module').then(m => m.OperationsModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule { }
