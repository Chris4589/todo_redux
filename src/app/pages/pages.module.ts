import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../components/reducer';
import { environment } from 'src/environments/environment';
import { AppReducer } from '../app.reducer';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    
    SharedModule,
    ComponentsModule
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
