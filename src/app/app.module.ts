import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { reducers } from './redux/reducers';
import { LayoutItemComponent } from './components/layout-item/layout-item.component';
import { LayoutEffects } from './redux/layout/layout.effects';
import { VLayoutComponent } from './components/layout-item/impl/v-layout/v-layout.component';
import { HLayoutComponent } from './components/layout-item/impl/h-layout/h-layout.component';
import { FormInputComponent } from './components/layout-item/impl/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutItemComponent,
    VLayoutComponent,
    HLayoutComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([LayoutEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
