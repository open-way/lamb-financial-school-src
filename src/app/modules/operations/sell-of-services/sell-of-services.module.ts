import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { SellOfServicesRoutingModule } from './sell-of-services-routing.module';
import { SellOfServicesComponent } from './sell-of-services.component';
import { FormSellNewComponent } from './components';
import { NbIconModule, NbInputModule, NbSelectModule, NbButtonModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { NaturalLegalPersonsService, TipoComprobantesService } from '@providers/services';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

const COMPONENTS: any[] = [
  SellOfServicesComponent,
  FormSellNewComponent,
];

const NB_NEBULAR: any[] = [
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
];

const NGB_NEBULAR: any[] = [
  NgbTypeaheadModule,
];

const SERVICES: any[] = [
  TipoComprobantesService,
  NaturalLegalPersonsService,
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    ...NB_NEBULAR,
    ...NGB_NEBULAR,
    SellOfServicesRoutingModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class SellOfServicesModule { }
