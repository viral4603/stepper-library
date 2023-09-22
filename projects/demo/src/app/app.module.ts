import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { StepperModule } from 'stepper';
import { AddressDetailsComponent } from './address-details/address-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDetailsComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
