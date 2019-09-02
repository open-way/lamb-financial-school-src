import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ListaServicesComponent, FormSellNewComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: 'new',
        component: FormSellNewComponent,
      },
      {
        path: '',
        component: ListaServicesComponent,
      },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'new',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
