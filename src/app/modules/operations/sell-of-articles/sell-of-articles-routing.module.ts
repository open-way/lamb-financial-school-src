import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellOfArticlesComponent } from './sell-of-articles.component';
import { FormSellNewComponent } from './components/form-sell-new/form-sell-new.component';

const routes: Routes = [
  {
    path: '',
    component: SellOfArticlesComponent,
    children: [
      {
        path: 'new',
        component: FormSellNewComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'new',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellOfArticlesRoutingModule { }
