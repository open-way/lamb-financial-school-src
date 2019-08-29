import { NgModule } from '@angular/core';
import {
    MainPageComponent, HeaderComponent, IdentityEnterpriseComponent,
    SidebarContentComponent, SidebarFooterComponent,
    SidebarHeaderComponent,
    IdentityIasdLogoComponent,
} from './';
import {
    NbThemeModule, NbLayoutModule, NbCardModule,
    NbSidebarModule, NbMenuModule, NbUserModule, NbActionsModule,
    NbContextMenuModule, NbDialogModule, NbIconModule, NbButtonModule, NbSelectModule, NbSpinnerModule,
} from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { LambMenuModule, LambTitleModule } from 'lamb-web-lib';
import { environment as env } from '@env/environment';
import {
    TOKEN_LAMB_OAUTH_URL, TOKEN_UPEU_OAUTH_URL,
    TOKEN_LAMB_CREDENTIALS_APP, TOKEN_UPEU_CREDENTIALS_APP,
    TOKEN_UPEU_OAUTH_STORE, TOKEN_LAMB_OAUTH_STORE,
    TOKEN_LAMB_SHELL_APP_URL,
} from '../oauth/utils';
import { ToastrModule } from 'ngx-toastr';
import { StateService } from './shared/state.service';
import { SharedModule } from '../modules/shared/shared.module';
import {
    UsersThemesService, MyDepartmentService,
    MyEntityDepartmentsService, MyEntitiesService,
} from '@providers/services';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChangeEnterpriseModalComponent } from './main-page/header/change-enterprise-modal/change-enterprise-modal.component';

const BASE_MODULES = [
    CommonModule,
    RouterModule,

    SharedModule,
];

const NB_MODULES: any[] = [
    // NbThemeModule.forRoot({ name: 'lamb-default' }),
    // NbThemeModule.forRoot({ name: 'default' }),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot({ closeOnEsc: false, closeOnBackdropClick: false }),
    NbUserModule,
    NbActionsModule,
    NbContextMenuModule,

    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NbSpinnerModule,
];

const CORE_COMPONENTS: any[] = [
    HeaderComponent,
    IdentityEnterpriseComponent,

    MainPageComponent,
    IdentityIasdLogoComponent,
    SidebarContentComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,

    ChangeEnterpriseModalComponent,
];

const LAMB_MODULES: any[] = [
    // LambMenuModule,
    // LambTitleModule.forRoot({ appName: 'Lamb Compras' }),
];

const PROVIDERS: any[] = [
    { provide: TOKEN_LAMB_OAUTH_STORE, useValue: { accessToken: 'lamb-access-token', authorizationCode: 'lamb-authorization-code' } },
    { provide: TOKEN_UPEU_OAUTH_STORE, useValue: { accessToken: 'upeu-access-token', authorizationCode: 'upeu-authorization-code' } },

    { provide: TOKEN_LAMB_OAUTH_URL, useValue: env.lambOAuthUrl },
    { provide: TOKEN_UPEU_OAUTH_URL, useValue: env.upeuOAuthUrl }, // ADD Change
    { provide: TOKEN_LAMB_CREDENTIALS_APP, useValue: env.lambClientCredentials },
    { provide: TOKEN_UPEU_CREDENTIALS_APP, useValue: env.upeuClientCredentials }, // ADD Change

    { provide: TOKEN_LAMB_SHELL_APP_URL, useValue: env.shellAppUrl },

    StateService,
    UsersThemesService,
    MyDepartmentService,
    MyEntityDepartmentsService, MyEntitiesService,
];

@NgModule({
    imports: [
        ...BASE_MODULES,
        ...NB_MODULES,
        ...LAMB_MODULES,
        ToastrModule.forRoot({ positionClass: 'toast-bottom-center' }),
    ],
    exports: [
        // ...NB_MODULES,
    ],
    declarations: [
        ...CORE_COMPONENTS,
    ],
    providers: [
        ...PROVIDERS,
    ],
    entryComponents: [
        ChangeEnterpriseModalComponent,
    ],
})
export class CoreModule { }
