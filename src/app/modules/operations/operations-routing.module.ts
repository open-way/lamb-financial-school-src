import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from './operations.component';

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent,
    children: [
      {
        path: 'sell-of-articles',
        loadChildren: 'app/modules/operations/sell-of-articles/sell-of-articles.module#SellOfArticlesModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
