import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellOfServicesComponent } from './sell-of-services.component';
import { FormSellNewComponent } from './components/form-sell-new/form-sell-new.component';

const routes: Routes = [
  {
    path: '',
    component: SellOfServicesComponent,
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
export class SellOfServicesRoutingModule { }
