import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { FormSellNewComponent, ListaServicesComponent } from './components';
import { NbIconModule, NbInputModule, NbSelectModule, NbButtonModule, NbSpinnerModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
// import { NaturalLegalPersonsService, TipoComprobantesService } from '@providers/services';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

const COMPONENTS: any[] = [
  ServicesComponent,
  FormSellNewComponent,
  ListaServicesComponent,

];

const NB_NEBULAR: any[] = [
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbSpinnerModule,
];

const NGB_NEBULAR: any[] = [
  NgbTypeaheadModule,
];

const SERVICES: any[] = [
  // TipoComprobantesService,
  // NaturalLegalPersonsService,
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    ...NB_NEBULAR,
    ...NGB_NEBULAR,
    ServicesRoutingModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesModule { }
