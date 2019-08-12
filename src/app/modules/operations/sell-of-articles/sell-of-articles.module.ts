import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellOfArticlesRoutingModule } from './sell-of-articles-routing.module';
import { SellOfArticlesComponent } from './sell-of-articles.component';
import { FormSellNewComponent } from './components/form-sell-new/form-sell-new.component';
import { SharedModule } from 'app/modules/shared/shared.module';
import { NbIconModule } from '@nebular/theme';

const COMPONENTS: any[] = [
  SellOfArticlesComponent,
  FormSellNewComponent,
];

const NB_NEBULAR: any[] = [
  NbIconModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    ...NB_NEBULAR,
    SellOfArticlesRoutingModule,
  ]
})
export class SellOfArticlesModule { }
