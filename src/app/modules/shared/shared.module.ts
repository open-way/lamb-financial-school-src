import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbCheckboxModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutorizationGuardService, StoreUserActionsService, ManageAutorizationService } from '@providers/guards';
import { AccessService } from '@providers/services';
import { SearchComponent } from './components';
// import {
//   LambButtonBackModule, LambInputIconModule,
//   LambConfirmDialogModule, LambButtonIconModule,
//   LambShowErrorModule, LambFieldsetModule,
// } from 'lamb-web-lib';

const COMPONENTS: any[] = [
  SearchComponent,
];

const NB_MODULES: any[] = [
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbSpinnerModule,
];

const ANGULAR_MODULES: any[] = [
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
];

@NgModule({
  imports: [
    ...NB_MODULES,
    ...ANGULAR_MODULES,
  ],
  exports: [
    ...NB_MODULES,
    ...ANGULAR_MODULES,
    ...COMPONENTS,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    AutorizationGuardService,
    StoreUserActionsService,
    ManageAutorizationService,

    AccessService,
  ],
})
export class SharedModule { }
