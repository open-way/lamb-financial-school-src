import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { SellOfArticlesRoutingModule } from './sell-of-articles-routing.module';
import { SellOfArticlesComponent } from './sell-of-articles.component';
import { FormSellNewComponent } from './components';
import { NbIconModule, NbInputModule, NbSelectModule, NbButtonModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { TipoComprobantesService } from '@providers/services';

const COMPONENTS: any[] = [
  SellOfArticlesComponent,
  FormSellNewComponent,
];

const NB_NEBULAR: any[] = [
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
];

const SERVICES: any[] = [
  TipoComprobantesService,
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    ...NB_NEBULAR,
    SellOfArticlesRoutingModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class SellOfArticlesModule { }
