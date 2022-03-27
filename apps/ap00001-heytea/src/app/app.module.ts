import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AccountEffect } from './store/effects/accounts.effect';
import { wotbReducers } from './store/reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { AccountService } from './service/account.service';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,    
    AgGridModule.withComponents([]),
    StoreModule.forRoot(wotbReducers),
    EffectsModule.forRoot([AccountEffect]),
    environment.production?[]:StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production,
      autoPause:true
    })
  ],
  providers: [AccountService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
