import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
// import { NbEvaIconsModule } from '@nebular/eva-icons';
import { InterceptorsModule } from './providers/interceptors/interceptors.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbEvaIconsModule,
    InterceptorsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
