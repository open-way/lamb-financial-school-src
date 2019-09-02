import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from './operations.component';

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent,
    children: [
      {
        path: 'sell-of-services',
        loadChildren: () => import('./sell-of-services/sell-of-services.module').then(m => m.SellOfServicesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
